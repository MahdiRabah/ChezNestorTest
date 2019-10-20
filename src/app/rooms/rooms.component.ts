import { Component, OnInit } from '@angular/core';
import { RoomsService } from './rooms-service';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent implements OnInit {

  chosenRoom: any;
  roomsList: any;
  room: any;
  form: FormGroup;
  public roomDetail: Array<any>;

  constructor(private  RoomsService: RoomsService,private router: Router,config: NgbModalConfig, private modalService: NgbModal ) { 
    config.backdrop = 'static';
    config.keyboard = false;
    this.form= new FormGroup({name: new FormControl('',Validators.required),adress: new FormControl('',Validators.required),
    zip: new FormControl('',Validators.required),city: new FormControl('',Validators.required),status: new FormControl('',Validators.required)})
    this.getRooms();
  }

  goToRoomDetail(i){
    this.router.navigate(['/room-details'], {state: {data: { i }}});
  }

  ngOnInit() { }

  open(content) {
    this.modalService.open(content,{ size: 'lg' },);
  }

  getRoom(id){
    this.RoomsService.getRoom("id")
    .subscribe((res) => {
      this.room = res;
      console.log(this.room);
    });
  }

  getRooms(){
    this.RoomsService.getRooms()
    .subscribe((res) => {
      this.roomsList = res;
      console.log(this.roomsList);
    });
    
  }

  show(id){
    this.chosenRoom=id;
    console.log(id);
    this.router.navigate(['/']);
  } 

  /*show(id){
    this.RoomsService.getRoom(id)
    .subscribe(
  (data:Array<any>)  => {
    this.roomDetail = data;
    

    this.roomDetail['id']=id;
    console.log(this.roomDetail);
    
    this.router.navigate(['/']);
    });
    
  } */


} 