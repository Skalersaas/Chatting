namespace Chatting.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string Content { get; set; } = string.Empty;
        public int SenderId { get; set; }
        public User? Sender { get; set; }
        public int ChatId { get; set; }
        public Chat? Chat { get; set; }

        public DateTime? SentAt { get; set; }
    }
    public class MessageDTO(Message msg)
    {
        public int Id { get; set; } = msg.Id;
        public string Content { get; set; } = msg.Content;
        public int SenderId { get; set; } = msg.SenderId;
        public int ChatId { get; set; } = msg.ChatId;
        public DateTime? SentAt { get; set; } = msg.SentAt;
    }
}
