namespace Chatting.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public List<ChatMembership> ChatsMemberships { get; set; } = [];
        public string ConnectionId()
        {
            return $"U-{Id}";
        }
    }
    public class UserDTO(User user)
    {
        public int Id { get; set; } = user.Id;
        public string Name { get; set; } = user.Name;
        public string Email { get; set; } = user.Email;
        public string Password { get; set; } = user.Password;
    }
}