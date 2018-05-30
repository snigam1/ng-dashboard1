import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.scss']
})
export class CardTaskComponent implements OnInit {

  @Input()
  tasks: string;
  

  constructor() { }

  ngOnInit() {
  }

}
