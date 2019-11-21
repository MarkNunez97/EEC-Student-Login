import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  footer:any;


  constructor(private router: Router) { 
    
  }
 

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.footer = document.getElementById('footer');
  }

  goToContact(){
  this.footer.scrollIntoView();
  }
}
