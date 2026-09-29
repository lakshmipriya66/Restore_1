using System.Text.Json.Serialization;
using API.Data;
using API.Middleware;
using Microsoft.EntityFrameworkCore;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services
    

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    });

        builder.Services.AddDbContext<StoreContext>(options =>
        {
            options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
        });

        builder.Services.AddCors(options =>
        {
            options.AddPolicy("ReactPolicy", policy =>
            {
                policy.WithOrigins(
                        "http://localhost:3000",
                        "https://localhost:3000"
                    )
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials();
            });
        });

        builder.Services.AddTransient<ExceptionMiddleware>();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
        
        app.UseCors("CorsPolicy");

        app.UseCors("ReactPolicy");

        app.UseHttpsRedirection();

        app.UseMiddleware<ExceptionMiddleware>();

        app.UseCors("ReactPolicy");

        app.UseAuthorization();

        app.MapControllers();

        DbInitializer.InitDb(app);

        app.Run();
    }
}