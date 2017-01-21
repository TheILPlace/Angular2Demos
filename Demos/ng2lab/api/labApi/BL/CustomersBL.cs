using labApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace labApi.BL
{
    public class CustomersBL
    {

        public List<Customer> GetCustomers()
        {
    

        List<Customer> MyList = new List<Customer>();
            MyList.Add(new Customer { _id= "1",  FirstName = "Dan", LastName = "Legister", Email = "a@a.com", Address = "500 8th Ave", Gender="Male" });
            MyList.Add(new Customer { _id = "2", FirstName = "John", LastName = "Lenon", Email = "b@b.com", Address = "50 Rodeo Drive", Gender = "Male" });
            MyList.Add(new Customer { _id = "3", FirstName = "Jane", LastName = "Gilbert", Email = "c@c.com", Address = "4 Orlando Drive ", Gender = "Female" });
            MyList.Add(new Customer { _id = "4", FirstName = "Marge", LastName = "Simpson", Email = "d@d.com", Address = "100w 48st", Gender = "Female" });


            return MyList;



        }
    }
}