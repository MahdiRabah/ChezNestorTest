import { Component, OnInit } from '@angular/core';
import { ClientsService } from './clients-service';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';


 declare interface TableData {
    headerRow: string[];
    dataRows: string[][]; 
  }
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientsList: any;
  client: any;
  


  constructor(
    private  ClientsService: ClientsService,
    config: NgbModalConfig, 
    private modalService: NgbModal) { 
      config.backdrop = 'static';
      config.keyboard = false;
      this.getClients();
  }

  ngOnInit() { }

  open(content) {
    this.modalService.open(content,{ size: 'lg' },);
  }

  getClient(id){
    this.ClientsService.getClient("id")
    .subscribe((res) => {
      this.client = res;
      console.log(this.client);
    })
  }

  getClients(){
    this.ClientsService.getClients()
    .subscribe((res) => {
      this.clientsList = res;
      console.log(this.clientsList);
    });
    
  }

}

