import { Component, OnInit,Inject,HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
// import { WINDOW } from './window.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isOpen: boolean = false;
  content = 262;
  navIsFixed: boolean;
  scrollTop:any;
  scrollLeft:any;
  scrollTopHeight: any;

  constructor(@Inject(DOCUMENT) private document: Document) {
    // this.window = this.document.defaultView;
   }
  opened = false;

  value: any;
  color:boolean=false;
  ngOnInit() {
    console.log("isopen", this.isOpen);
  
    // this.onWindowScroll();
  }
  onToolBarMenuToggle() {
    this.isOpen = !this.isOpen;
    console.log("isopen", this.isOpen);
    if (this.isOpen) {
      this.content = 62;

    }
    else {
      this.content = 262;
    }
  }
  // onto() {
  //   console.log('vaibhaw');

  // }
  fullScreen() {
    let elem = document.body;
    let methodToBeInvoked = elem.requestFullscreen ||
      elem['mozRequestFullscreen'] ||
      elem['msRequestFullscreen'];
    if (methodToBeInvoked) methodToBeInvoked.call(elem);

  }
  @HostListener("window:scroll", [])


  // onWindowScroll() {
  //   // let number = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
  //   // if (number > 100) {
  //   //   this.navIsFixed = true;
  //   // } else if (this.navIsFixed && number < 10) {
  //   //   this.navIsFixed = false;
  //   // }
  //   let offset = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 1;
  //   console.log(offset);
  //   console.log(window);
  //   console.log('vaibhaw')

  // }
 

getScrollCordinates($event) {
      // console.log($event)
      this.scrollTopHeight=$event.target.scrollTop
      if (this.scrollTopHeight>23) {
       this.color=true;
  
      }
      else {
        this.color=false;
      }
  console.log(this.scrollTopHeight);
  
    }

}
