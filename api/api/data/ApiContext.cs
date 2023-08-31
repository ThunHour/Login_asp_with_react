using Microsoft.EntityFrameworkCore;
using api.Model;
namespace api.data
{
    public class ApiContext :DbContext
    {
        public DbSet<userModel> users { set; get; }
        public ApiContext(DbContextOptions<ApiContext> options) : base(options)
        {

        }
    }
}
