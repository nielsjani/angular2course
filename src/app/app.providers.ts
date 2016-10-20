import { ContactsService } from './contacts.service';
import {API_ENDPOINT} from './app.tokens';
import {EventBusService} from './app.eventbus';
import { Title} from '@angular/platform-browser';

export const APP_PROVIDERS = [
  ContactsService,
  EventBusService,
  Title,
  {provide: API_ENDPOINT, useValue: "http://localhost:4201"}
];
