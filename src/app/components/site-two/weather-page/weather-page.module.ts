import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { WeatherPageComponent } from './weather-page.component';
import { SiteTwoHeaderComponent } from '../site-two-header/site-two-header.component';
import { SiteTwoSelectComponent } from '../site-two-select/site-two-select.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    WeatherPageComponent,
    SiteTwoHeaderComponent,
    SiteTwoSelectComponent,
  ],
  exports: [WeatherPageComponent],
  providers: [],
})
export class WeatherPageModule { }
