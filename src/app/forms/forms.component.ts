import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
 
  folders: Section[] = [
    {
      name: 'Advising Form',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Student Travel Form',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Change of Major Form',
      updated: new Date('1/28/16'),
    }
  ];

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
  }

}
