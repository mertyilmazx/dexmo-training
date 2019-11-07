import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from 'src/routes/HomePage/HomePage.component';
import { SecondPageComponent } from 'src/routes/SecondPage/SecondPage.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, SecondPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
