import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookPageComponent } from './components/site-one/book-page/book-page.component';
import { SiteOneComponent } from './components/site-one/site-one/site-one.component';
import { ContentComponent } from './components/site-one/content/content.component';

import { WeatherPageComponent } from './components/site-two/weather-page/weather-page.component';

import { GamePageComponent } from './components/site-three/game-page/game-page.component';

const routes: Routes = [

  //Links in first site
  { path: 'siteOne', component: SiteOneComponent },
  { path: 'bookPage/:id', component: BookPageComponent },
  { path: 'bookPage/:id/content/:id', component: ContentComponent },

  //Links in second site
  { path: 'siteTwo', component: WeatherPageComponent },

  //Links in third site
  { path: 'siteThree', component: GamePageComponent },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
