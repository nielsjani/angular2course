import { Component, OnInit } from '@angular/core';
import {ContactsService} from './../contacts.service'
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Contact} from "../models/contact";

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  private contact;

  constructor(private contactsService: ContactsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.contact = <Contact>{ address: {}};
    const contactId: number = parseInt(this.route.snapshot.params['id']);
    this.contactsService.getContact(contactId)
      .subscribe(contact => this.contact = contact);
  }

  save(contact: Contact){
    this.contactsService.updateContact(contact)
      .subscribe(response => this.router.navigateByUrl("/marsupilami/" + contact.id));
  }

  cancel(contact: Contact){
    this.router.navigateByUrl("/marsupilami/" + contact.id);
  }

}
