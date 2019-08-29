import { Component, OnInit,Input } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss']
})
export class SidenavContentComponent implements OnInit {

public barChartLabels = ['', '', '', '', '', '', ''];

public barChartType = 'bar';
public barChartLegend = true;
public barChartData = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: ''},
  {data: [28, 48, 40, 19, 86, 27, 90], label: ''},

];

public radarChartLabels = ['sun', 'mon', 'tue', 'wed'];
public radarChartData = [
  {data: [120, 130, 180, 70], label: 'Product'},
  {data: [90, 150, 200, 45], label: 'service'}
];
public radarChartType = 'radar';

public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';
  public pieChartOptions = {'backgroundColor': [
    "#FF6384",
 "#4BC0C0",
 "#FFCE56",
 "#E7E9ED",

 ]}






  
  constructor() { 
}
 ngOnInit() {
   
  }
@Input() value:Boolean;

}

