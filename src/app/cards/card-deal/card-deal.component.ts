import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-deal',
  templateUrl: './card-deal.component.html',
  styleUrls: ['./card-deal.component.scss']
})
export class CardDealComponent implements OnInit {
  
  @Input()
  deals: string;

  constructor() { }

  ngOnInit() {
  }

}
