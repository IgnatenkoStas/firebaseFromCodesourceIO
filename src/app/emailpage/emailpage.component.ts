import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-emailpage',
  templateUrl: './emailpage.component.html',
  styleUrls: ['./emailpage.component.css']
})
export class EmailPageComponent implements OnInit {

  public email: string = '';
  public password: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.email.length && this.password.length !== 0) {
      console.log(this.email + ' ' + this.password);
      this.authService.login(
        this.email,
        this.password
      )
    }
  }
}
