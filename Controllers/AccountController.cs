using Chatting.Models;
using Chatting.Data;
using Chatting.Helpers;
using Microsoft.AspNetCore.Mvc;
namespace Chatting.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController(ApplicationContext context) : ControllerBase
    {
        [HttpPost("login")]
        public ActionResult Login([FromForm] string Login, [FromForm] string Password)
        {
            User? user = context.GetUserBy(Login);
            if (user == null || !Hasher.VerifyPassword(Password, user.Password))
                return NotFound(new { response = "Wrong Login/Password" });

            return Ok(new
            {
                response = "ok",
                access_token = AuthOptions.GetJWTToken(Login, user.Id),
                username = Login,
                userId = user.Id
            });
        }

        [HttpPost("register")]
        public ActionResult Register([FromForm] string Login, [FromForm] string Password)
        {
            if (context.GetUserBy(Login) != null)
                return Conflict(new { response = "User with this login exists" });

            string hashPassword = Hasher.HashPassword(Password);
            User user = new()
            {
                Name = Login,
                Password = hashPassword,
            };
            context.AddUser(user);

            return Ok(new { response = "User created" });
        }
    }
}
