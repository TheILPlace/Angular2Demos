using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiDemo.Models
{
    public class Customer
    {

        public string FirstName;
        public string LastName;
        public string Address;
        public string PhoneNumber;
        public List<Address> MyAddresses;

    }
}