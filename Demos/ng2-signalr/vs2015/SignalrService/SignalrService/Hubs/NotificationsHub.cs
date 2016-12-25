using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace SignalrService.Hubs
{
    public class NotificationsHub : Hub
    {
        public void SendHello(string message)
        {
            Clients.All.hello(message);
        }
    }
}