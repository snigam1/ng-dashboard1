import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
import { Feed } from './feed.interface';

import {sampleNewsFeed} from './sample'

@Injectable()
export class NewsFeedService {
    private endPointCounter: number = -1;

    private baseEndPoint: string = 'https://newsapi.org/v2/top-headlines';
    private serviceParams = [{
        sources: 'reuters',
        apiKey: 'ae6ad1c6d1254c7a95556b52bda0dfd7'
    }, {
        sources: 'bloomberg',
        apiKey: 'ae6ad1c6d1254c7a95556b52bda0dfd7'
    }, {
        country: 'sg',
        category: 'business',
        apiKey: 'ae6ad1c6d1254c7a95556b52bda0dfd7'
    }, {
        sources: 'australian-financial-review',
        apiKey: 'ae6ad1c6d1254c7a95556b52bda0dfd7'
    }];

    constructor(
        private http: Http,
        private httpClient: HttpClient
    ) { }

    private incrementCounter() {
        this.endPointCounter++;
        if (this.endPointCounter >= this.serviceParams.length) {
            this.endPointCounter = 0;
        }
    }

    getFeedContent(): Observable<any> {
        this.incrementCounter();
        return this.httpClient.get(this.baseEndPoint, {
            params: this.serviceParams[this.endPointCounter],
            observe: 'body'
        });
    }
}