import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  sideNav:any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.sideNav = document.getElementById('mySideNav');
  }

  openNav() {
    this.sideNav.style.width = "250px";
    alert(this.sideNav);
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
