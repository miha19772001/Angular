import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SiteThreeHeaderComponent } from '../site-three-header/site-three-header.component';
import { GamePageComponent } from './game-page.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    SiteThreeHeaderComponent,
    GamePageComponent,
  ],
  exports: [GamePageComponent],
  providers: [],
})
export class GamePageModule { }
