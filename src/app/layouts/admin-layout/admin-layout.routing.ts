import { Routes } from '@angular/router';

import { ClientsComponent } from '../../clients/clients.component';
import { RoomsComponent } from '../../rooms/rooms.component';
import { RoomDetailsComponent } from '../../room-details/room-details.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'rooms',     component: RoomsComponent },
    { path: 'clients',     component: ClientsComponent },
    { path: 'room-details',     component: RoomDetailsComponent },
];
