import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() value: boolean;
  

    // "person": [
    //     {
    //         "firstName": "vaibhw",
    //         "lastName": "tikhile",
    //         "address": "jalahalli",
    //         "city": "Amravati",
    //         "zip": "444701",
    //         "mobile": "7387944658"
    //     },
    //     {
    //         "firstName": "Akash ",
    //         "lastName": "munde",
    //         "address": "rajajinagar",
    //         "city": "akola",
    //         "zip": "560057",
    //         "mobile": "3546589745"
    //     },
    //     {
    //         "firstName": "laxman",
    //         "lastName": "pole",
    //         "address": "vashi",
    //         "city": "pune",
    //         "zip": "601205",
    //         "mobile": "7534753745"
    //     },
    //     {
    //         "firstName": "shyam",
    //         "lastName": "S J",
    //         "address": "ramayan naagr",
    //         "city": "nagpur",
    //         "zip": "577501",
    //         "mobile": "9987524134"
    //     }
    // ]
}

