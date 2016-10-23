import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateEmail][ngModel]', // ? Is this an AND relation?
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: validateEmail,
      multi: true // http://blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html
    }
  ]
})
export class EmailValidator {

  constructor() {
  }

}

function validateEmail(c:FormControl) {
  console.log("lets validate some emals.");
  const VALID_EMAIL = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  if (!VALID_EMAIL.test(c.value)) {
    return {
      validateEmail: {
        valid: false
      }
    }
  }
  return null;
}
