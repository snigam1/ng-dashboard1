import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'fa-home'},
      {label: 'My Feed', icon: 'fa-rss'},
      {label: 'Watchlist', icon: 'fa-star'},
      {label: 'Contact360', icon: 'fa-address-book'},
      {label: 'Company360', icon: 'fa-university'},
      {label: 'Deal360', icon: 'fa-usd'},
      {label: 'Infopacks', icon: 'fa-plus-square-o'},
      {label: 'Topic tags', icon: 'fa-refresh'},
      {label: 'Calender', icon: 'fa-calendar'},
      {label: 'Notes', icon: 'fa-sticky-note'},
      {label: 'Chat', icon: 'fa-commenting'},

      {label: 'Shared with me', icon: 'fa-refresh'},

  ];
  }

}
