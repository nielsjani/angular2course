import {Routes} from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

export const ContactsAppRoutes:Routes = [
  {path: '', component: ContactsListComponent},
  {path: 'marsupilami/:id', component: ContactsDetailsComponent},
  {path: 'marsupilami/:id/edit', component: ContactsEditorComponent}
];
