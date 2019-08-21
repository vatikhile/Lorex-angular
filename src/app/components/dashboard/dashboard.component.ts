import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isOpen:boolean=false;
  content=262;
  
    constructor() { }
  opened=false;
  
  value:any;
    ngOnInit() {
      console.log("isopen",this.isOpen);
    }
    onToolBarMenuToggle(){
  this.isOpen=!this.isOpen;
  console.log("isopen",this.isOpen);
  if(this.isOpen)
  {
    this.content=62;
  
    }
    else{
      this.content=262;
    }
    }
    onto(){
      console.log('vaibhaw');
      
    }
    fullScreen() {
      let elem =  document.body; 
      let methodToBeInvoked = elem.requestFullscreen || 
        elem['mozRequestFullscreen'] || 
       elem['msRequestFullscreen']; 
      if(methodToBeInvoked) methodToBeInvoked.call(elem);
  
  }
  
  }


