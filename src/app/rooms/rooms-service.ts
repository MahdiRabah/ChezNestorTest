import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  baseURL = "https://technical-test-api.herokuapp.com"
  
  constructor(private http: HttpClient) { }

  getRooms(){
    return  this.http.get(this.baseURL+"/rooms")
  }

  getRoom(id:String){
    return this.http.get(this.baseURL+"/rooms/"+id)
  }

}
