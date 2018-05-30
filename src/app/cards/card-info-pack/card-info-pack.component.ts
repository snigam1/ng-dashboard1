import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info-pack',
  templateUrl: './card-info-pack.component.html',
  styleUrls: ['./card-info-pack.component.scss']
})
export class CardInfoPackComponent implements OnInit {

  @Input()
  infoPacks: string;

  constructor() { }

  ngOnInit() {
  }

}
