namespace Chatting.Models
{
    public class ChatMembership
    {
        public int UserId {  get; set; }
        public User? User { get; set; }
        public int ChatId { get; set; }
        public Chat? Chat { get; set; }

        public DateTime? JoinedAt { get; set; }
    }
    public class ChatMembershipDTO(ChatMembership CM)
    {
        public int UserId { get; set; } = CM.UserId;
        public int ChatId { get; set; } = CM.ChatId;
        public DateTime? JoinedAt { get; set; } = CM.JoinedAt;
    }
}
