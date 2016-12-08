import { Component, OnInit } from '@angular/core';

import { Client } from '../../models/client';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  private clients:Array<Client>;

  constructor() { }

  ngOnInit() {
    this.clients = null;
  }

  private save = (client: Client): void => {   
    
  }

  private delete = (client: Client): void => {
    
  }

  private add = (): void => {
    
  }
}
