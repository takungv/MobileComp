using Microsoft.AspNetCore.Mvc;
using ToDo.Models; // แก้ตามชื่อ project คุณ

[ApiController]
[Route("api/[controller]")]
public class ActivitiesController : ControllerBase
{
    private readonly ToDoDbContext _context;

    public ActivitiesController(ToDoDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Get()
    {
        try
        {
            var data = _context.Activity.ToList();
            return Ok(data);
        }
        catch (Exception ex)
        {
            return Ok(ex.Message); // 👈 เอา error ออกมาโชว์
        }
    }

    [HttpPost]
    public IActionResult Create(Activity activity)
    {
        _context.Activity.Add(activity);
        _context.SaveChanges();

        return Ok(activity);
    }

}