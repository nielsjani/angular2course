import { Component } from '@angular/core';
import { Title} from '@angular/platform-browser';
import {EventBusService} from './app.eventbus';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {
  private title;

  constructor(private eventBusService: EventBusService, private titleService: Title) {}

  ngOnInit () {
    this.eventBusService.observe('appTitleChange')
      .subscribe(title => {
        this.titleService.setTitle(title);
        this.title = title;
      });
  }
}
