import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  footer:any;

  constructor(private router: Router) { }
  value = 70;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.footer = document.getElementById('footer');
  }

  goToAbout(){
    this.router.navigate(["about"]);
  }

  goToContact(){
    this.footer.scrollIntoView();
  }

  goToStatus(){
    this.router.navigate(["status"]);
  }
}
