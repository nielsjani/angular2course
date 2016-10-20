import { ContactsService } from './contacts.service';
import {API_ENDPOINT} from './app.tokens';
import {EventBusService} from './app.eventbus';

export const APP_PROVIDERS = [
  ContactsService,
  EventBusService,
  {provide: API_ENDPOINT, useValue: "http://localhost:4201"}
];
