import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActivityFeedComponent } from './card-activity-feed.component';

describe('CardActivityFeedComponent', () => {
  let component: CardActivityFeedComponent;
  let fixture: ComponentFixture<CardActivityFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardActivityFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardActivityFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
