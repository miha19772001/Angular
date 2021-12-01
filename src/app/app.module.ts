import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

//To site one
import { SiteOneModule } from './components/site-one/site-one/site-one.module';

//To site two
import { WeatherPageModule } from './components/site-two/weather-page/weather-page.module';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  exports: [
    SiteOneModule, 
    WeatherPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
