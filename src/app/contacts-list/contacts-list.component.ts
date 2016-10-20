import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";
import {Observable} from "rxjs/Observable";
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  private contacts:Observable<Array<Contact>>;
  private terms$ = new Subject<string>();

  constructor(private contactsService:ContactsService) {
  }

  ngOnInit() {
    this.contacts = this.terms$
      .debounceTime(400)
      .distinctUntilChanged() //Observable<String>
      .switchMap(term => this.contactsService.rawSearch(term)) // Observable<Array<Contact>>
      .merge(this.contactsService.getContacts()) // merge is only called once, not anymore after the terms$ change
    ;
  }
}
