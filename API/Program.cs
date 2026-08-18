using API.Data;
using Microsoft.EntityFrameworkCore;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services
        builder.Services.AddControllers();

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
                    .AllowAnyMethod();
            });
        });

        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseCors("ReactPolicy");

        app.UseAuthorization();

        app.MapControllers();

        DbInitializer.InitDb(app);

        app.Run();
    }
}