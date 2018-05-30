import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewsFeedComponent } from './card-news-feed.component';

describe('CardNewsFeedComponent', () => {
  let component: CardNewsFeedComponent;
  let fixture: ComponentFixture<CardNewsFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNewsFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNewsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
