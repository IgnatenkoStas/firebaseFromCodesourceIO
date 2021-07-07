import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {}

  signOut() {
    this.authService.logout();
  }
}
