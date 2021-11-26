import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

import { SiteOneComponent } from '../site-one/site-one.component';

import { SiteOneHeaderComponent } from '../site-one-header/site-one-header.component';
import { BookPageComponent } from '../book-page/book-page.component';
import { ContentComponent } from '../content/content.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    SiteOneComponent,
    SiteOneHeaderComponent,
    BookPageComponent,
    ContentComponent,
  ],
  exports: [SiteOneComponent],
  providers: [],
})
export class SiteOneModule { }
