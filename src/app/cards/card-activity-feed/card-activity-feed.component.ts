import { Component, Input, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-card-activity-feed',
  templateUrl: './card-activity-feed.component.html',
  styleUrls: ['./card-activity-feed.component.scss'],
})
export class CardActivityFeedComponent implements OnInit {

  @Input()
  messages: string;

  constructor() { }

  ngOnInit() {
  }

}
