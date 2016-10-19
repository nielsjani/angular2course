import {Routes} from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';

export const ContactsAppRoutes:Routes = [
  {path: '', component: ContactsListComponent},
  {path: 'marsupilami/:id', component: ContactsDetailsComponent}
];
