using Chatting.Data;
using Chatting.Helpers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;

namespace Chatting
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var app = SetUpBuilder(args).Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseCors("AllowAll");
            app.UseHttpsRedirection();
            app.UseAuthentication();    
            app.UseAuthorization();
            app.UseWebSockets();

            app.MapControllers();

            app.Run();
        }
        private static WebApplicationBuilder SetUpBuilder(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();
            builder.Services.AddSingleton<WebSocketHandler>();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll",
                    builder => builder
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
            });
            ConfigureDatabase(builder);
            ConfigureAuthentification(builder);
            return builder;
        }
        private static void ConfigureDatabase(WebApplicationBuilder builder)
        {
            string? connectionString = builder.Configuration.GetConnectionString("Default");
            builder.Services.AddDbContext<ApplicationContext>
                            (options => options.UseNpgsql(connectionString));
        }
        private static void ConfigureAuthentification(WebApplicationBuilder builder)
        {
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new()
                    {
                        ValidateIssuer = true,
                        ValidIssuer = AuthOptions.ISSUER,

                        ValidateAudience = true,
                        ValidAudience = AuthOptions.AUDIENCE,

                        ValidateLifetime = true,
                        ClockSkew = TimeSpan.FromMinutes(5),
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey()
                    };
                });

        }
    }
}
