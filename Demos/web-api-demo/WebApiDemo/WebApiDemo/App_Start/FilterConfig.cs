using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiDemo.App_Start
{
    public class FilterConfig
    {

        public static void RegisterWebApiFilters(System.Web.Http.Filters.HttpFilterCollection filters)
        {
            filters.Add(new Authorization.MyFilter());



        }
    }
}