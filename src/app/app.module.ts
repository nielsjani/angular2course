import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { ContactsService } from './contacts.service';
import {ContactsAppRoutes} from './app.routes';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent, ContactsListComponent, ContactsDetailsComponent],
  providers: [ContactsService],
  imports: [BrowserModule, RouterModule.forRoot(ContactsAppRoutes), HttpModule],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
