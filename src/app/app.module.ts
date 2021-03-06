import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatBadgeModule} from '@angular/material'
// import { WINDOW_PROVIDERS } from "./window.service";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
// import {MatMenuModule} from '@angular/material/menu';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavContentComponent } from './components/sidenav-content/sidenav-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { ChartsModule } from 'ng2-charts';
import {MatMenuModule} from '@angular/material/menu';
// import {AccordionModule} from 'primeng/accordion';     
// import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SidenavContentComponent,
    SidenavComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    ChartsModule,
    // AccordionModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatBadgeModule,
    MatDividerModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
