import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "278px";
    document.getElementById("main").style.marginLeft = "295px";
    //document.getElementById("chart").style.marginLeft = "3%";
    document.getElementById("main").style.width = "76%";
    //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "auto";
    document.getElementById("main").style.width = "90%";
   // document.body.style.backgroundColor = "white";
  }

}
