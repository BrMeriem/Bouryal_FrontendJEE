import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  public host = 'http://localhost:8888/CUSTOMER-SERVICE';

  constructor(private  http: HttpClient) { }

  public getProducts(){

    return this.http.get(this.host + '/customers');

  }
}
