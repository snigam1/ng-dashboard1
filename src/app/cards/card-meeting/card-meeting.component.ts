import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-meeting',
  templateUrl: './card-meeting.component.html',
  styleUrls: ['./card-meeting.component.scss']
})
export class CardMeetingComponent implements OnInit {

  @Input()
  meetings: string;

  constructor() { }

  ngOnInit() {
  }

}
