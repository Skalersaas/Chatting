namespace Chatting.Models
{
    public class Chat
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public bool IsGroup { get; set; }
        public List<Message> Messages { get; set; } = [];
        public List<ChatMembership> Memberships { get; set; } = [];
    }
    public class ChatDTO
    {
        public string Name { get; set; }
        public List<int> MembersId { get; set; }
    }
}
