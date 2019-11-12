
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  container:any;
  siEmail:string;
  siPassword:string;

  suName:string;
  suEmail:string;
  suPassword:string;
  
  constructor(private router: Router) { }
  
  ngOnInit() {

  }

  ngAfterViewInit() {
    this.container = document.getElementById('container');
  }

  signIn(){
    if(this.siEmail != null && this.siPassword != null){
      this.router.navigate(["user"]);
    }else{
      alert("Make sure both Email and Password are filled out");
    }
  }

  signUp(){
    if(this.suName != null && this.suEmail != null && this.suPassword != null){
      this.router.navigate(["user"]);
    }else{
      alert("Make sure all fields are filled out");
    }
  }

  signInOverlay(){
    this.container.classList.remove('right-panel-active');
  }
  signUpOverlay(){
    this.container.classList.add('right-panel-active');
  }
  

}



