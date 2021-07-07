import { EmailPageComponent } from './emailpage/emailpage.component';
import { ProfilePageComponent } from './profilepage/profilepage.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';


const firebaseConfig = {
  apiKey: "AIzaSyAl_J72wYOrx7A9iXWhqshPZb2kl8_UKeI",
  authDomain: "angularauth-130ac.firebaseapp.com",
  projectId: "angularauth-130ac",
  storageBucket: "angularauth-130ac.appspot.com",
  messagingSenderId: "469475967865",
  appId: "1:469475967865:web:37220bbe1bac7656bde5a8",
  measurementId: "G-GLJHFTMH5V"
};


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    SignUppageComponent,
    ProfilePageComponent,
    EmailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
