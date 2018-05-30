import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoPackComponent } from './card-info-pack.component';

describe('CardInfoPackComponent', () => {
  let component: CardInfoPackComponent;
  let fixture: ComponentFixture<CardInfoPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInfoPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfoPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
