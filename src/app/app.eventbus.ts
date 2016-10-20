import {EventBusArgs} from './eventbusargs';
import {Subject} from "rxjs/Subject";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";

export class EventBusService  {

  private _messages$ = new Subject<EventBusArgs>();

  emit(eventType: string, data: any) {
    this._messages$.next({ type: eventType, data: data });
  }

  observe(eventType: string) {
    return this._messages$
      .filter(args => args.type === eventType)
      .map(args => args.data);
  }
}
