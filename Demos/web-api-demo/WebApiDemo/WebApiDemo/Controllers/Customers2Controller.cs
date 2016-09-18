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
    public class Customers2Controller : ApiController
    {
        [HttpGet]
        public HttpResponseMessage GetMyCustomers()
        {


            List<Customer> myList = new List<Customer>();
            myList = GetAllCustomers();

            return Request.CreateResponse(HttpStatusCode.OK, myList);


        }
        

        [HttpGet]
        public HttpResponseMessage GetOneCustomers(int id)
        {


            List<Customer> myList = new List<Customer>();
            myList = GetAllCustomers();

            return Request.CreateResponse(HttpStatusCode.OK, myList[0]);


        }



        [Route("api3/customers3/2")]
        [HttpGet]
        public HttpResponseMessage GetTwoCustomers()
        {


            List<Customer> myList = new List<Customer>();
            myList = GetAllCustomers();

            List<Customer> newList = new List<Customer>();
            newList.Add(myList[0]);
            newList.Add(myList[1]);


            return Request.CreateResponse(HttpStatusCode.OK, newList);


        }



        private List<Customer> GetAllCustomers()
        {

            WebApiDemo.BL.CustomersBL myBL = new WebApiDemo.BL.CustomersBL();


            return myBL.GetCustomers();
        }

    }
}
