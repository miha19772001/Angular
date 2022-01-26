import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//SiteOne
import { BookPageComponent } from './components/site-one/book-page/book-page.component';
import { SiteOneComponent } from './components/site-one/site-one/site-one.component';
import { ContentComponent } from './components/site-one/content/content.component';
import { WorkNotFoundComponent } from './components/site-one/work-not-found/work-not-found.component';

//SiteTwo
import { WeatherPageComponent } from './components/site-two/weather-page/weather-page.component';

//SiteThree
import { GamePageComponent } from './components/site-three/game-page/game-page.component';

//Home
import { HomeComponent } from './components/home/home-page/home.component';

const routes: Routes = [

  //Link to home site
  { path: 'home', component: HomeComponent },

  //Links to the first site
  { path: 'siteOne', component: SiteOneComponent },
  { path: 'bookPage/:id', component: BookPageComponent },
  { path: 'bookPage/:id/content/:id', component: ContentComponent },
  { path: 'siteOne/workNotFound', component: WorkNotFoundComponent },

  //Link to the second site
  { path: 'siteTwo', component: WeatherPageComponent },

  //Link to the third site
  { path: 'siteThree', component: GamePageComponent },

  //Link to home
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
