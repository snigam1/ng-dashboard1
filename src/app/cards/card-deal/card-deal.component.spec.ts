import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDealComponent } from './card-deal.component';

describe('CardDealComponent', () => {
  let component: CardDealComponent;
  let fixture: ComponentFixture<CardDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
