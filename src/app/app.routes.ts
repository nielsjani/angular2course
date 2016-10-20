import {Routes} from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailsViewComponent } from './contacts-details-view/contacts-details-view.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';

export const ContactsAppRoutes:Routes = [
  {path: '', component: ContactsListComponent},
  {path: 'marsupilami/:id', component: ContactsDetailsViewComponent},
  {path: 'marsupilami/:id/edit', component: ContactsEditorComponent},
  {path: 'new', component: ContactsCreatorComponent}
];
