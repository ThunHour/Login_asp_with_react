using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Model;
using api.data;
using api.Dto;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using Newtonsoft.Json;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        //
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select * from dbo.UserInfo";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("userSMS");
            SqlDataReader myReader;
            using(SqlConnection myCon=new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand =new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]
        [Route("login")]
        public JsonResult login(UserDto user)
        {
            string query = @"select * from dbo.UserInfo  where username='" + user.username+@"' and password ='"+user.password+@"'";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("userSMS");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);                   
                    myReader.Close();
                    myCon.Close();
                }
            }
            if (table.Rows.Count != 1)
            {
                return new JsonResult(NotFound("User do not exit"));
            }
            return new JsonResult(Ok("Login successfuly"));
        }
        [HttpPost]
        [Route("signup")]
        public JsonResult Signup(UserDto user)
        {
            string query = @"insert into dbo.UserInfo values ('" + user.username + @"', '" + user.password + @"')";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("userSMS");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(Ok("Signin successful"));
        }
    }
}
