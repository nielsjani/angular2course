import { ContactsService } from './contacts.service';
import {API_ENDPOINT} from './app.tokens';
import {EventBusService} from './app.eventbus';
import { Title} from '@angular/platform-browser';
import { ContactsResolver} from './shared/contacts.resolver';
import {CONFIRM_NAVIGATION_GUARD} from "./app.tokens";

export const APP_PROVIDERS = [
  ContactsService,
  EventBusService,
  ContactsResolver,
  Title,
  {provide: API_ENDPOINT, useValue: "http://localhost:4201"},
  {provide: CONFIRM_NAVIGATION_GUARD, useValue: (component) => !component.warnOnClosing ||  window.confirm('Are you sure?')}
];
