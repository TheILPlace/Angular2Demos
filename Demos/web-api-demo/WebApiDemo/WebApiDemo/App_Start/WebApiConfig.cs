using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace WebApiDemo
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            config.EnableCors();

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

          //  config.Routes.MapHttpRoute(
          //    name: "ActionApi",
          //    routeTemplate: "api2/{controller}/{action}/{id}",
          //    defaults: new { id = RouteParameter.Optional }
          //);

          //  config.Routes.MapHttpRoute(
          //    name: "values1",
          //    routeTemplate: "test/v1/values/{id}",
          //    defaults: new { id = RouteParameter.Optional, controller = "Values1" }
          //);

          //  config.Routes.MapHttpRoute(
          //    name: "values2",
          //    routeTemplate: "test/v2/values/{id}",
          //    defaults: new { id = RouteParameter.Optional, controller = "Values2" }
          //);


          



            //change all variables etc to camel case from pascal case.
            var jsonFormatter = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

        }
    }
}
