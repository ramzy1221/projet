import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgetComponent } from './forget/forget.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { PasswordconfirmedComponent } from './passwordconfirmed/passwordconfirmed.component';



const routes: Routes = [
  
  {path:'forget',component:ForgetComponent},
  {path:'login',component:LoginComponent},
  {path:'reset-password',component:NewpasswordComponent},
  {path:'password-confirmed',component:PasswordconfirmedComponent},
  
  

  
  
  
  {path: '',
  component: DefaultComponent,

  children: [
    {
    path: '',
    component: DashboardComponent
  },
   {
    path: 'posts',
    component: PostsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
