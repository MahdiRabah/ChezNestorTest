import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { RoomsComponent } from '../../rooms/rooms.component';
import { NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { ClientsComponent } from '../../clients/clients.component';
import { RoomDetailsComponent } from 'app/room-details/room-details.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgbModalModule,
  ],
  
  declarations: [
    RoomsComponent,
    ClientsComponent,
    RoomDetailsComponent,
  ],

  entryComponents: [ ClientsComponent,RoomsComponent],
})

export class AdminLayoutModule {}
