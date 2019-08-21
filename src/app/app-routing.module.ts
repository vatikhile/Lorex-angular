import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from '../app/navbar/navbar.component'
import {DashboardComponent} from '../app/components/dashboard/dashboard.component'
import {SidenavContentComponent} from '../../src/app/components/sidenav-content/sidenav-content.component'
import { from } from 'rxjs';
const routes: Routes = [
  {path:'', component:DashboardComponent },
  {path:'content', component:SidenavContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
