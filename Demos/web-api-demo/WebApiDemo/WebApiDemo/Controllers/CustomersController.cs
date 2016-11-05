using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiDemo.BL;
using WebApiDemo.Models;

namespace WebApiDemo.Controllers
{
    public class CustomersController : ApiController
    {
       // [Authorize]
        [HttpGet]
        public HttpResponseMessage Get()
        {
            
            List<Customer> myList = new List<Customer>();
            myList = GetAllCustomers();
            
            return Request.CreateResponse(HttpStatusCode.OK, myList);  


        }

        [HttpGet]
        public HttpResponseMessage Get(int id)
        {

            List<Customer> myList = new List<Customer>();
            myList = GetAllCustomers();

            return Request.CreateResponse(HttpStatusCode.OK, myList[0]);


        }



        private List<Customer>  GetAllCustomers()
        {

            WebApiDemo.BL.CustomersBL myBL = new WebApiDemo.BL.CustomersBL();

            
            return myBL.GetCustomers();
        }



        [HttpPost]
        public HttpResponseMessage Post([FromBody] Customer customer)
        {
            WebApiDemo.BL.CustomersBL myBL = new WebApiDemo.BL.CustomersBL();

            //int id = myBL.AddCustomer(customer);
            int id = 5;

            return Request.CreateResponse(HttpStatusCode.OK, id);


        }


        //// GET: api/Tester
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET: api/Tester/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/Tester
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT: api/Tester/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE: api/Tester/5
        //public void Delete(int id)
        //{
        //}
    }
}
