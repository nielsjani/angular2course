import { Component, OnInit } from '@angular/core';
import {ContactsService} from './../contacts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from "../models/contact";

@Component({
  selector: 'trm-contacts-details-view',
  templateUrl: './contacts-details-view.component.html'
})
export class ContactsDetailsViewComponent implements OnInit {
  private contact: Contact;

  constructor(private contactsService: ContactsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const contactId: number = parseInt(this.route.snapshot.params['id']);
    this.contactsService.getContact(contactId)
      .subscribe(contact => this.contact = contact);
  }

  navigateToEditor($event) {
    this.router.navigateByUrl("/marsupilami/" + $event.id + "/edit");
  }

  navigateToList() {
    this.router.navigateByUrl("/");
  }

}
