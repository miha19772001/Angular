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




import { BookPageService } from 'src/app/services/book-page.service.service';

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
  ],
  exports: [SiteOneComponent],
  providers: [BookPageService],
})
export class SiteOneModule { }
