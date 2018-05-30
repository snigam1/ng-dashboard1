import { Component, OnInit, ViewChild } from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component'
@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {

  
  @ViewChild(SidebarComponent) childSidebar:SidebarComponent;
  constructor() { }

  ngOnInit() {
  }pdate

}
