import { Component, OnInit, Input,ViewChild } from '@angular/core';

import {MenuComponent} from '../menu/menu.component'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  
  @ViewChild(MenuComponent) menu:MenuComponent;

  title = 'app';
  
  @Input()
  display = false;
  constructor() { }
  

  @Input()
  
  ngOnInit() {
  }

  @Input()
  showSidebar(){
    this.display = true;
    
  }

  

}
