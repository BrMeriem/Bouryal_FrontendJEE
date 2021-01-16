import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public customers: any;

  constructor(private clientService: ClientService) { }


  ngOnInit() {
    this.clientService.getProducts()
      .subscribe(data => {
        this.customers = data;
      }, err => {
        console.log(err);
      }); }

}
