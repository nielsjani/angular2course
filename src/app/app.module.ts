import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailsViewComponent } from './contacts-details-view/contacts-details-view.component';
import { ContactsDetailsComponent } from './contact-details/contacts-details.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import {ContactsAppRoutes} from './app.routes';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {APP_PROVIDERS} from './app.providers'
import 'rxjs/add/operator/map';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/filter";

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsDetailsViewComponent,
    ContactsDetailsComponent,
    ContactsEditorComponent],
  providers: APP_PROVIDERS,
  imports: [
    BrowserModule,
    RouterModule.forRoot(ContactsAppRoutes),
    HttpModule,
    FormsModule],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
