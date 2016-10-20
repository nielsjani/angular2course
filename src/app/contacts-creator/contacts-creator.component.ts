import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../contacts.service"
import {Router} from '@angular/router';

@Component({
  selector: 'trm-contacts-creator',
  templateUrl: './contacts-creator.component.html'
})
export class ContactsCreatorComponent implements OnInit {

  constructor(private contactsService: ContactsService, private router: Router) { }

  ngOnInit() {
  }

  submit(formValue) {
    this.contactsService.addContact(formValue)
      .subscribe(response => this.router.navigateByUrl("/marsupilami/" +response.id));
  }

}
