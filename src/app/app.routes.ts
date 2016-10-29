import {Routes} from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailsViewComponent } from './contacts-details-view/contacts-details-view.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { AboutComponent } from './about/about.component';
import { CONFIRM_NAVIGATION_GUARD } from './app.tokens';

export const ContactsAppRoutes:Routes = [
  //{path: '', component: ContactsListComponent},
  {
    path: '',
    component: ContactsDashboardComponent,
    children: [
      {path: '', redirectTo: 'marsupilami/0'}, //default
      {path: 'marsupilami/:id', component: ContactsDetailsViewComponent},
      {path: 'marsupilami/:id/edit',
        component: ContactsEditorComponent,
        canDeactivate: [CONFIRM_NAVIGATION_GUARD]
      },
    ]
  },
  {path: 'new', component: ContactsCreatorComponent},
  {path: 'about', component: AboutComponent}
];
