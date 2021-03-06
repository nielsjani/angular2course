import { Component, OnInit } from '@angular/core';
import {ContactsService} from './../contacts.service'
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Contact} from "../models/contact";
import {EventBusService} from "../app.eventbus";

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html'
})
export class ContactsEditorComponent implements OnInit {
  private contact;
  warnOnClosing= true;

  constructor(private contactsService: ContactsService, private route: ActivatedRoute, private router: Router, private eventBus: EventBusService) { }

  ngOnInit() {
    this.route.data
      .map(data => data['contact'])
      .subscribe(contact => {
        this.contact = contact;
        this.eventBus.emit("appTitleChange", "Editing " + contact.name);
      });
  }

  changeName($event) {
    this.eventBus.emit("appTitleChange", "Editing " + $event);
  }

  save(contact: Contact){
    this.warnOnClosing = false;
    this.contactsService.updateContact(contact)
      .subscribe(response => this.router.navigateByUrl("/marsupilami/" + contact.id));
  }

  cancel(contact: Contact){
    this.router.navigateByUrl("/marsupilami/" + contact.id);
  }

}
