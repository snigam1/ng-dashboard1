import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-news-feed',
  templateUrl: './card-news-feed.component.html',
  styleUrls: ['./card-news-feed.component.scss']
})
export class CardNewsFeedComponent implements OnInit {
  @Input()
  messages: string;

  constructor() { }

  ngOnInit() {
  }

}
