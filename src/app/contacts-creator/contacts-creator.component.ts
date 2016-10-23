import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../contacts.service"
import {Router} from '@angular/router';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {validateEmail} from '../email-validator/email-validator.directive';

@Component({
  selector: 'trm-contacts-creator',
  templateUrl: './contacts-creator.component.html'
})
export class ContactsCreatorComponent implements OnInit {

  form:FormGroup;
  nameField:FormControl;
  emailField:FormControl;

  constructor(private contactsService:ContactsService, private router:Router, private formBuilder:FormBuilder) {
  }

  ngOnInit() {
    this.nameField = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.emailField = new FormControl('', validateEmail);

    this.form = this.formBuilder.group({
      name: this.nameField,
      email: this.emailField,
      phone: [''],
      birthday: [''],
      website: [''],
      address: this.formBuilder.group({
        street: [''],
        zip: [''],
        city: [''],
        country: ['']
      })
    });
  }

  submit(formValue) {
    this.contactsService.addContact(formValue)
      .subscribe(response => this.router.navigateByUrl("/marsupilami/" + response.id));
  }

}
