import { Injectable } from '@angular/core';
import {CONTACT_DATA} from './data/contact-data'
import {Contact} from "./models/contact";
import {Http} from '@angular/http';

@Injectable()
export class ContactsService {

  private API_ENDPOINT: string = "http://localhost:4201";

  constructor(private http: Http) {
  }

  getContacts() {
    return this.http.get(this.API_ENDPOINT + "/api/contacts")
      .map(resp => resp.json())
      .map(data => data.items)
      ;
  }

  getContact(id: number) {
    return this.http.get(this.API_ENDPOINT + "/api/contacts/" + id)
      .map(resp => resp.json())
      .map(data => data.item)
      ;
  }
}
