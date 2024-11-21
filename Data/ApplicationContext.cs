using Chatting.Models;
using Microsoft.EntityFrameworkCore;

namespace Chatting.Data
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Chat> Chats { get; set; }
        public DbSet<ChatMembership> ChatMembers { get; set; }
        public ApplicationContext(DbContextOptions options) : base(options)
        {
            //Database.EnsureDeleted();
            Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<ChatMembership>(CM =>
            {
                CM.HasOne(cm => cm.User)
                  .WithMany(u => u.ChatsMemberships)
                  .HasForeignKey(cm => cm.UserId);
                CM.HasOne(cm => cm.Chat)
                  .WithMany(c => c.Memberships)
                  .HasForeignKey(cm => cm.ChatId);

                CM.HasKey(cm => new { cm.UserId, cm.ChatId });
            });
            modelBuilder.Entity<Message>(msg =>
            {
                msg.HasOne(m => m.Sender)
                   .WithMany()
                   .HasForeignKey(m => m.SenderId);
            });
        }

        public User? GetUserBy(string Name) => Users.FirstOrDefault(u => u.Name == Name);
        public User? GetUserBy(int Id) => Users.FirstOrDefault(u => u.Id == Id);

        public void AddUser(User user)
        {
            Users.Add(user);
            SaveChanges();
        }
        public List<MessageDTO> GetMessagesInChat(int chatId, int index)
        {
            return [.. Messages
                        .Where(m => m.ChatId == chatId)
                        .Skip(index)
                        .Take(100)
                        .Select(m => new MessageDTO(m))];
        }
        public bool AddMessage(Message message, out Chat? chat)
        {
            chat = Chats.Include(c => c.Memberships).FirstOrDefault(x => x.Id == message.ChatId);
            if (chat == null)
                return false;
            if (Users.FirstOrDefault(x => x.Id == message.SenderId) == null)
                return false;

            Messages.Add(message);
            SaveChanges();
            return true;
        }
        public List<User> UsersInChat(int chatId)
        {
            return [..Chats
                          .Include(c => c.Memberships)
                          .ThenInclude(m => m.User)
                          .Where(c => c.Id == chatId)
                          .SelectMany(c => c.Memberships)
                          .Select(m => m.User)];
        }
    }
}
