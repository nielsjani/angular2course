import { Component } from '@angular/core';
import {EventBusService} from './app.eventbus';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {
  private title;

  constructor(private eventBusService: EventBusService) {}

  ngOnInit () {
    this.eventBusService.observe('appTitleChange')
      .subscribe(title => this.title = title);
  }
}
