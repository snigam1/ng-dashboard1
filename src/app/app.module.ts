import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';
import { ToolbarModule } from 'primeng/components/toolbar/toolbar';
import { CardModule } from 'primeng/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { SidebarModule } from 'primeng/sidebar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardInfoPackComponent } from './cards/card-info-pack/card-info-pack.component';
import { CardCompanyComponent } from './cards/card-company/card-company.component';
import { CardNewsFeedComponent } from './cards/card-news-feed/card-news-feed.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ThumbImagePipe } from './pipes/thumb-image.pipe';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { CardDealComponent } from './cards/card-deal/card-deal.component';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { DataTableModule } from 'primeng/datatable';
import { CardMeetingComponent } from './cards/card-meeting/card-meeting.component';
import { CardTaskComponent } from './cards/card-task/card-task.component';
import { NewsFeedService } from './news-feed/news-feed.service';
import { CardActivityFeedComponent } from './cards/card-activity-feed/card-activity-feed.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderToolbarComponent,
    DashboardComponent,
    CardInfoPackComponent,
    CardCompanyComponent,
    CardNewsFeedComponent,
    NewsFeedComponent,
    ThumbImagePipe,
    CardCompanyComponent,
    SidebarComponent,
    MenuComponent,
    CardDealComponent,
    CardMeetingComponent,
    CardTaskComponent,
    CardActivityFeedComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    ToolbarModule,
    SidebarModule,
    CardModule,
    MenuModule,
    DataTableModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [NewsFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
