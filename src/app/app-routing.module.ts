import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from '../app/navbar/navbar.component'
import {DashboardComponent} from '../app/dashboard/dashboard.component'
const routes: Routes = [
  {path:'', component:NavbarComponent },
  {path:'dashboard', component:DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
