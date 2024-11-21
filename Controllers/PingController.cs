using Chatting.Data;
using Microsoft.AspNetCore.Mvc;

namespace Chatting.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PingController(ApplicationContext context) : ControllerBase
    {
        [HttpGet]
        public ActionResult Ping()
        {
            context.SaveChanges();
            return Ok("Server's working correctly");
        }
    }
}
