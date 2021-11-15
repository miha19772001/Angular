import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SiteOneComponent } from '../site-one/site-one.component';

import { SiteOneHeaderComponent } from '../site-one-header/site-one-header.component';
import { BookPageComponent } from '../book-page/book-page.component';

import { LinkDirective } from '../../../directives/site-one/link.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    SiteOneComponent,
    SiteOneHeaderComponent,
    BookPageComponent,
    LinkDirective,
  ],
  exports: [SiteOneComponent],
})
export class SiteOneModule { }
