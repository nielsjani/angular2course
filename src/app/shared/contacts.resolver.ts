import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {ContactsService} from "../contacts.service";
import { Injectable } from '@angular/core';
import {Contact} from "../models/contact";

@Injectable()
export class ContactsResolver implements Resolve<Contact> {

  constructor(private contactsService: ContactsService){

  }

  resolve(route:ActivatedRouteSnapshot):Observable<Contact> {
    return this.contactsService.getContact(parseInt(route.params['id']));
  }

}
