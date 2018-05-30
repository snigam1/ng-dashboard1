import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-company',
  templateUrl: './card-company.component.html',
  styleUrls: ['./card-company.component.scss']
})
export class CardCompanyComponent implements OnInit {
  @Input()
  name: string;
  @Input()
  logoUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
