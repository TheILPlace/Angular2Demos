using labApi.BL;
using labApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace labApi.Controllers
{
    public class CustomersController : ApiController
    {
        // GET: api/Customers
        public IHttpActionResult Get()
        {
            CustomersBL b = new CustomersBL();

            
            return Ok(b.GetCustomers());
        }

        // GET: api/Customers/5
        public IHttpActionResult Get(int id)
        {
            CustomersBL b = new CustomersBL();
            Customer customer = new Customer();
            customer = b.GetCustomers().SingleOrDefault(x =>  x._id == id.ToString());
            return Ok(customer);

        }

        // POST: api/Customers
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Customers/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Customers/5
        public void Delete(int id)
        {
        }
    }
}
