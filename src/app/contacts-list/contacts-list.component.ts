import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";
import {Observable} from "rxjs/Observable";
import {Subject} from 'rxjs/Subject';
import {EventBusService} from '../app.eventbus';
import {EventBusArgs} from "../eventbusargs";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html'
})
export class ContactsListComponent implements OnInit {

  private contacts:Observable<Array<Contact>>;
  private terms$ = new Subject<string>();

  constructor(private contactsService:ContactsService, private eventBus: EventBusService) {
  }

  ngOnInit() {
    this.eventBus.emit("appTitleChange", "Overview");
    this.contacts = this.contactsService.search(this.terms$)
      .merge(this.contactsService.getContacts()); // merge is only called once, not anymore after the terms$ change
  }
}
