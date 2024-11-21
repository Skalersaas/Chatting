using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
namespace Chatting.Helpers
{
    public static class Hasher
    {
        public static string HashPassword(string password)
        {
            byte[] salt = RandomNumberGenerator.GetBytes(16);
            return $"{Convert.ToBase64String(salt)}:{HashPassword(password, salt)}";
        }
        public static bool VerifyPassword(string password, string hash)
        {
            string[] hashParts = hash.Split(':');
            byte[] salt = Convert.FromBase64String(hashParts[0]);
            string passwordHash = hashParts[1];
            return HashPassword(password, salt) == passwordHash;
        }
        private static string HashPassword(string password, byte[] salt)
        {
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password!,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 100000,
                numBytesRequested: 32));
            return hashed;
        }
    }
}
