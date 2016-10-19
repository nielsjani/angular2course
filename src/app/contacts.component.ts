import { Component } from '@angular/core';
import {Contact} from './models/contact'
import {CONTACT_DATA} from './data/contact-data'
import {ContactsService} from "./contacts.service";
import { OnInit } from '@angular/core';


@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent implements OnInit {
  private contacts:Contact[];

  constructor(private contactsService:ContactsService) {
  }

  ngOnInit():void {
    this.contacts = this.contactsService.getContacts();
  }

}
