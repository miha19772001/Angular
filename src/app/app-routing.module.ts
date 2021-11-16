import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPageComponent } from './components/site-one/book-page/book-page.component';
import { SiteOneComponent } from './components/site-one/site-one/site-one.component';

const routes: Routes = [

  //Links in first site
  { path: 'siteOne', component: SiteOneComponent },
  { path: 'bookPage/:id', component: BookPageComponent},
  
  { path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
