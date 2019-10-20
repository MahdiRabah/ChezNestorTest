import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ClientsService {

  baseURL = "https://technical-test-api.herokuapp.com"

  constructor(private http: HttpClient) { }

 
  getClients(){
    return  this.http.get(this.baseURL+"/clients")  
  }

  getClient(id){
    return this.http.get(this.baseURL+"/clients/"+id)
  }
}
