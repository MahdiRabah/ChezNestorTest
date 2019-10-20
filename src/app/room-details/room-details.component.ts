import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})

export class RoomDetailsComponent implements OnInit {
  room: any;

  constructor() { }

  ngOnInit() {
    this.room = history.state.data
    console.log(this.room);
    
  }

}
