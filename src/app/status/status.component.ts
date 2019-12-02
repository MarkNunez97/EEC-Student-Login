import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  value = 0;
  footer:any;
  //  0/3 = 0
  //  1/3 = 33
  //  2/3 = 67
  //  3/3 = 100
  

  constructor(private router: Router) { }
 
  curSec: number = 0;

  startTimer(seconds: number) {
    const time = seconds;
    const timer$ = interval(1000);

    const sub = timer$.subscribe((sec) => {
      this.value = 0 + sec * 100 / seconds;
      this.curSec = sec;

      if (this.curSec === seconds) {
        sub.unsubscribe();
      }
    });
  }

  ngOnInit() {
    this.startTimer(1);
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
