import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  showFiller = false;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
