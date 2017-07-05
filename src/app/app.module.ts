//import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
//import { FormsModule } from '@angular/forms';

import { AppComponent, DashboardComponent } from './components';
import { AppRoutingModule } from './routing/app-routing.module';
import { CoreModule } from "app/core/core.module";
import { MyModule } from "app/my/my.module";

// const firebaseConfig = {
//     apiKey: "AIzaSyA1eQ8bA_cYfS0lplFP640EbxOvC5rdTgg",
//     authDomain: "rwa-trivia-6b7d1.firebaseapp.com",
//     databaseURL: "https://rwa-trivia-6b7d1.firebaseio.com",
//     projectId: "rwa-trivia-6b7d1",
//     storageBucket: "rwa-trivia-6b7d1.appspot.com",
//     messagingSenderId: "692722887683"
//   };

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,    
  ],  
  imports: [
    //BrowserModule,
    BrowserAnimationsModule,
    //FormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule, 
    MyModule,      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
