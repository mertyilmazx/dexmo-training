import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from 'src/routes/HomePage/HomePage.component';
import { SecondPageComponent } from 'src/routes/SecondPage/SecondPage.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, SecondPageComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
