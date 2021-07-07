import { EmailPageComponent } from './emailpage/emailpage.component';
import { ProfilePageComponent } from './profilepage/profilepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'signup', component: SignUppageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'email-login', component: EmailPageComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
