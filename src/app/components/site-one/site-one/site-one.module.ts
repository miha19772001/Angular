import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'

import { SiteOneComponent } from '../site-one/site-one.component';

import { HeaderSiteOneComponent } from '../header-site-one/header-site-one.component';
//import { SiteOneHeaderComponent } from '../site-one-header/site-one-header.component';
// import { BookPageComponent } from '../book-page/book-page.component';
// import { ContentComponent } from '../content/content.component';
// import { WorkNotFoundComponent } from '../work-not-found/work-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HeaderSiteOneComponent,
    SiteOneComponent,
    // SiteOneHeaderComponent,
    // BookPageComponent,
    // ContentComponent,
    // WorkNotFoundComponent,
  ],
  exports: [SiteOneComponent],
  providers: [],
})
export class SiteOneModule { }
