using System;
using System.Web;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Configuration;
using System.Security.Claims;

namespace WebApiDemo.Authorization
{
    public class MyFilter: AuthorizeAttribute
    {

        public string Params;

        protected override void HandleUnauthorizedRequest(System.Web.Http.Controllers.HttpActionContext actionContext)
        {
            actionContext.Response = new System.Net.Http.HttpResponseMessage(System.Net.HttpStatusCode.MethodNotAllowed);
        }
        public override void OnAuthorization(System.Web.Http.Controllers.HttpActionContext actionContext)
        {
            base.OnAuthorization(actionContext);
        }
        protected override bool IsAuthorized(System.Web.Http.Controllers.HttpActionContext actionContext)
        {
            
            return true;

            if (DateTime.Today.Day == 19)
                //return base.IsAuthorized(actionContext); 
                return true;
            else
                return false;
        }


    }



        //public override void OnAuthorization(HttpActionContext actionContext)
        //{
        //    if (DateTime.Today.Day == 19)
        //        //return base.IsAuthorized(actionContext); 
        //        actionContext.Response = new HttpResponseMessage(System.Net.HttpStatusCode.OK);
        //    else
        //        actionContext.Response = new HttpResponseMessage(System.Net.HttpStatusCode.Forbidden);
        //}




        //    protected override bool IsAuthorized(HttpActionContext actionContext)
        //    {

        //        base.IsAuthorized(actionContext);

        //        if (DateTime.Today.Day == 19)
        //            //return base.IsAuthorized(actionContext); 
        //            return true;
        //        else
        //            return false;

        //        //return base.IsAuthorized(actionContext);
        //    }



        //    //protected override void HandleUnauthorizedRequest(HttpActionContext actionContext)
        //    //{



        //    //    actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Forbidden);

        //    //    base.HandleUnauthorizedRequest(actionContext);
        //    //}


   // }









}

