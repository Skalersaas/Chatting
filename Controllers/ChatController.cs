using Microsoft.AspNetCore.Mvc;
using Chatting.Data;
using Microsoft.AspNetCore.Authorization;
using Chatting.Models;
using Chatting.Helpers;
namespace Chatting.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChatController(ApplicationContext context) : ControllerBase
    {
        [HttpGet]
        [Route("messages/chat={chatId}/index={index}")]
        [Authorize]
        public ActionResult MessagesInChat(int chatId, int index)
        {
            return Ok(context.GetMessagesInChat(chatId, index));
        }
        [HttpPost]
        [Authorize]
        [Route("start")]
        public ActionResult StartChat(ChatDTO chatDTO)
        {
            var transaction = context.Database.BeginTransaction();

            var chat = new Chat()
            {
                 IsGroup = chatDTO.MembersId.Count > 2,
                 Name = chatDTO.Name ?? string.Empty
            };
            context.Chats.Add(chat);

            context.SaveChanges();

            for (int i = 0; i < chatDTO.MembersId.Count; i++)
            {
                if (context.GetUserBy(chatDTO.MembersId[i]) == null)
                {
                    transaction.Rollback();
                    return NotFound(new { response = $"Not found user with id {chatDTO.MembersId[i]}" });
                }

                chat.Memberships.Add(new ChatMembership()
                {
                    ChatId = chat.Id,
                    UserId = chatDTO.MembersId[i],
                    JoinedAt = DateTime.UtcNow,
                });
            }
            context.SaveChanges();
            transaction.Commit();
            return Ok();
        }
        [HttpPost]
        [Authorize]
        [Route("send-message")]
        public async Task<ActionResult> SendMessage([FromForm] Message message)
        {
            if (!context.AddMessage(message, out var chat))
                return NotFound("User or chat is not found");

            var users = context.UsersInChat(chat.Id);
            for (int i = 0; i < users.Count; i++)
            {
                if (users[i].Id == message.SenderId)
                    continue;

                await WebSocketHandler.SendMessage(users[i].ConnectionId(), new
                {
                    chatId = chat.Id,
                    content = message.Content,
                    senderId = message.SenderId,
                });
            }

            return Ok();
        }
    }
}
