using BACKEND.DTO;
using BACKEND.Models;
using BACKEND.Service;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly JwtService _jwtService;
    private static readonly string[] AllowedRoles =
{
    "Tenant",
    "Landlord"
};

    public AuthController(AppDbContext context, JwtService jwtService)
    {
        _context = context;
        _jwtService = jwtService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterDTO dto)
    {
        if (_context.Users.Any(u => u.UserName == dto.Username))
            return BadRequest("User already exists");
        if (!AllowedRoles.Contains(dto.Role))
            return BadRequest("Role không hợp lệ");
        var user = new User
        {
            UserName = dto.Username,
            Password = dto.Password,
            FullName = dto.FullName,
            Email = dto.Email,
            Phone = dto.Phone,
            Role = dto.Role
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return Ok("Register success");
    }

    [HttpPost("login")]
    public IActionResult Login(LoginDTO dto)
    {
        var user = _context.Users
            .SingleOrDefault(u => u.UserName == dto.Username);

        if (user == null || user.Password != dto.Password)
            return Unauthorized("Invalid credentials");

        var token = _jwtService.GenerateToken(user);
        return Ok(new { token });
    }
}
