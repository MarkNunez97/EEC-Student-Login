import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../user/user.component';
import {LoginComponent} from '../login/login.component';
import { FormsComponent } from '../forms/forms.component';
import { AboutComponent } from '../about/about.component';
import { StatusComponent } from '../status/status.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  {path : 'forms', component : FormsComponent},
  {path : 'about', component : AboutComponent}, 
  {path : 'status', component : StatusComponent}, 
  {path : '', component : LoginComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }