import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from "../models/contact";
import {EventBusService} from "../app.eventbus";

@Component({
  selector: 'trm-contacts-details-view',
  templateUrl: './contacts-details-view.component.html'
})
export class ContactsDetailsViewComponent implements OnInit {
  private contact:Contact;

  constructor(private route:ActivatedRoute, private router:Router, private eventBus:EventBusService) {
  }

  ngOnInit() {
      this.route.data
        .map(data => data['contact'])
        .subscribe(contact => {
          this.contact = contact;
          this.eventBus.emit("appTitleChange", "Looking at detail of " + contact.name);
        });
  }

  navigateToEditor($event) {
    this.router.navigateByUrl("/marsupilami/" + $event.id + "/edit");
  }

  navigateToList() {
    this.router.navigateByUrl("/");
  }

}
