import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'trm-contacts-dashboard',
  templateUrl: './contacts-dashboard.component.html'
})
export class ContactsDashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }


}
