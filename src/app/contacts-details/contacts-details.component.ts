import { Component, OnInit } from '@angular/core';
import {ContactsService} from './../contacts.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'trm-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.css']
})
export class ContactsDetailsComponent implements OnInit {
  private contact;

  constructor(private contactsService: ContactsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const contactId: number = parseInt(this.route.snapshot.params['id']);
    this.contactsService.getContact(contactId)
      .subscribe(contact => this.contact = contact);
  }

}