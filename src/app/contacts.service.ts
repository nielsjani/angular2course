import { Injectable, Inject } from '@angular/core';
import {CONTACT_DATA} from './data/contact-data'
import {Contact} from "./models/contact";
import {Http} from '@angular/http';

@Injectable()
export class ContactsService {

  constructor(private http: Http, @Inject('apiEndpoint') private apiEndpoint) {
  }

  getContacts() {
    return this.http.get(this.apiEndpoint + "/api/contacts")
      .map(resp => resp.json())
      .map(data => data.items)
      ;
  }

  getContact(id: number) {
    return this.http.get(this.apiEndpoint + "/api/contacts/" + id)
      .map(resp => resp.json())
      .map(data => data.item)
      ;
  }

  updateContact(contact:Contact) {
     return this.http.put(this.apiEndpoint + "/api/contacts/" + contact.id, contact);
  }
}
