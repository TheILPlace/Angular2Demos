using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApiDemo.Models;


namespace WebApiDemo.BL
{
    public class CustomersBL
    {

        public List<Customer> GetCustomers()
        {
            List<Customer> MyList = new List<Customer>();
            MyList.Add(new Customer { FirstName = "Dan", LastName = "Legister", Address = "500 8th Ave", PhoneNumber = "444-3455"});
            MyList.Add(new Customer { FirstName = "John", LastName = "Lenon", Address = "50 Rodeo Drive", PhoneNumber = "333-3433" });
            MyList.Add(new Customer { FirstName = "Jane", LastName = "Gilbert", Address = "4 Orlando Drive ", PhoneNumber = "999-1114" });
            MyList.Add(new Customer { FirstName = "Marge", LastName = "Simpson", Address = "100w 48st", PhoneNumber = "934-1121" });


            return MyList;



        }

    }
}