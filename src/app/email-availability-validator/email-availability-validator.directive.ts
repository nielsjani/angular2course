import { Directive } from '@angular/core';
import { FormControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import {ContactsService} from "../contacts.service";

@Directive({
  selector: '[checkEmailAvailability][ngControl]', // ? Is this an AND relation?
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useValue: checkEmailAvailability,
      multi: true // http://blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html
    }
  ]
})
export class EmailAvailabilityValidatorDirective {

  constructor(private contactsService:ContactsService) {
  }

}

export function checkEmailAvailability(contactsService:ContactsService) {
  return (formControl:FormControl) => {
    return contactsService.isEmailAvailable(formControl.value)
      .map(response => !response.error ? null : {
        checkEmailAvailability: {
          available: false
        }
      });
  }
}
