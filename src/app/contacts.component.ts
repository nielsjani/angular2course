import { Component } from '@angular/core';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {
  title = 'Ik zit naast Sander (en nu ook naast Dieter Van Peer)';

  pokemon(pokemon1: string, pokemon2: string): string {
    return `${pokemon1} ${pokemon2}`;
  }
}
