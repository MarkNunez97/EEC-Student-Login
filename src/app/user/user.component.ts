import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  footer:any;

  forms: Section[] = [
    {
      name: 'Advising Form: Submited',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Student Travel Form: Under Review',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Change of Major Form: Completed',
      updated: new Date('1/28/16'),
    }
  ];

  constructor(private router: Router) { 
    
  }

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
  

  
}

