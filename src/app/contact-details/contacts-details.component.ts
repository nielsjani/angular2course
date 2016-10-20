import { Component,Input, Output, EventEmitter } from '@angular/core';
import {Contact} from "../models/contact";

@Component({
  selector: 'trm-contacts-details',
  templateUrl: './contacts-details.component.html'
})
export class ContactsDetailsComponent {
  @Input() private contact:Contact;
  @Output() private edit = new EventEmitter<Contact>();
  @Output() private cancel = new EventEmitter<void>();
}
