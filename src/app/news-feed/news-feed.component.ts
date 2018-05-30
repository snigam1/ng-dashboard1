import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { NewsFeedService } from './news-feed.service';
import { Feed, FeedEntry } from './feed.interface';

import {sampleNewsFeed} from './sample'

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  public feeds: Array<FeedEntry> = [];

  constructor (
      private feedService: NewsFeedService
  ) {}

  ngOnInit() {
    let timer = Observable.timer(100, 1800000);
    timer.subscribe(tick => {
      this.refreshFeed();
    });
  }

  private refreshFeed () {
    console.log('refreshing feed');
    
    this.feedService.getFeedContent()
        .subscribe(
            feed => this.handleFeedRefresh(feed),
            error => this.handleFeedRefresh(sampleNewsFeed));
  }

  handleFeedRefresh (feed: Feed) {
    // augment the feed entries with required fields
    
    let feeds = feed.articles.map((item: FeedEntry) => {
      item.expanded = false;
      item.pubDate = new Date(item.publishedAt);
      return item
    });

    // merge into feeds array in reverse date order
    feeds = this.feeds.concat(feeds)
        .sort((a: FeedEntry, b: FeedEntry) => {
          return b.pubDate.getTime() - a.pubDate.getTime();
        });

    // de-dupe
    this.feeds = feeds.filter((item, index, self) => {
      return index === self.findIndex((t: FeedEntry) => t.url === item.url);
    });
  }

  handleError (errorMsg: string) {
    console.log(errorMsg);
  }

  expandFeed (feed) {
    feed.expanded = !feed.expanded;
  }

}
