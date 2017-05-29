using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiDemo.Authorization;
using WebApiDemo.Models;

namespace WebApiDemo.Controllers
{
    [MyFilter(Params = "param1")]
    public class AchiController : ApiController
    {
        // GET: api/Tester
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Tester/5
        public IHttpActionResult Get(int id)
        {
            Customer cus  = new Customer();
            cus.FirstName = "dfdf";
            return Ok(cus);
        }

        // POST: api/Tester
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Tester/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Tester/5
        public void Delete(int id)
        {
        }
    }
}
