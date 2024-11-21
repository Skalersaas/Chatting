using Chatting.Data;
using Chatting.Helpers;
using Chatting.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Chatting.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WebSocketController(ApplicationContext context) : ControllerBase
    {
        [Authorize]
        [Route("connect")]
        public async Task<ActionResult> CreateConnection(int userId)
        {
            var user = context.GetUserBy(userId);
            if (user == null)
                return NotFound();

            using var webSocket = await HttpContext.WebSockets.AcceptWebSocketAsync();
            await foreach(var message in WebSocketHandler.HandleAsync(user.ConnectionId(), webSocket))
            {
                using var document = JsonDocument.Parse(message);
                var jsonNode = document.RootElement;
                Console.WriteLine(jsonNode.ToString());
                if (!jsonNode.GetProperty("messageType").TryGetInt32(out int messageType))
                {
                    Console.Error.WriteLine("Wrong json sent.");
                    continue;
                }
                var chatController = new ChatController(context);
                Console.WriteLine(messageType);
                if ((MessageType)messageType == MessageType.StartChat)
                {
                    var chatDTO = JsonSerializer.Deserialize<ChatDTO>(jsonNode.GetProperty("chat"));
                    chatController.StartChat(chatDTO);
                }
                else
                {
                    var Message = JsonSerializer.Deserialize<Message>(jsonNode.GetProperty("message"));
                    chatController.SendMessage(Message);
                }
            }
            return Ok();
        }
    }
    public enum MessageType
    {
        StartChat,
        Messaging
    }
}
