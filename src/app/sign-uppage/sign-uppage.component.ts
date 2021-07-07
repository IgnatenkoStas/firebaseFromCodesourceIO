import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-uppage',
  templateUrl: './sign-uppage.component.html',
  styleUrls: ['./sign-uppage.component.css']
})
export class SignUppageComponent implements OnInit {

  public email: string = '';
  public password: string = '';

  constructor(public authService: AuthService) { }

  ngOnInit() {}

  onSubmit() {
    if (this.email.length && this.password.length !== 0) {
      console.log(this.email + ' ' + this.password);
      this.authService.emailSignUp(this.email, this.password);
    }
  }
}
