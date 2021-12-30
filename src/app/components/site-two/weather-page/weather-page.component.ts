import { Component, OnInit, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

import { SiteTwoHeaderComponent } from '../site-two-header/site-two-header.component';
import { Observable } from '@reactivex/rxjs';
import { GetUrlCityService } from 'src/app/services/twoSite/get-url-city.service';

import { IWeather } from 'src/assets/Interfaces/IWeather';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
  providers: [GetUrlCityService],
})
export class WeatherPageComponent implements OnInit {

  constructor(private getUrlCity: GetUrlCityService, private element: ElementRef, private renderer: Renderer2) { }
  // @ViewChild(SiteTwoHeaderComponent)
  // public header!: SiteTwoHeaderComponent;



  public weater: IWeather = {
    temp: '',
    city: '',
    img: '',
    feels_like: '',
    pressure: '',
    description: '',
    window: {
      deg: '',
      speed: '',
    }
  };



  public getDirectionOfTheWind(speed: number, deg: number) {

    let arrow = document.getElementById('info_meaning-arrow');
    let wind = document.getElementById('info_meaning-wind');

    if (deg === 0 || deg === 360 || deg <= 22 || deg > 348) {
      this.renderer.setStyle(arrow, "transform", `rotate(${deg.toString()}deg)`);
      wind!.innerHTML = `${speed} м/c С` + "";
    }

    else if (Boolean(deg < 22) || deg <= 67) {
      this.renderer.setStyle(arrow, "transform", `rotate(${deg.toString()}deg)`);
      wind!.innerHTML = `${speed} м/c СВ`;
    }

    else if (Boolean(deg < 67) || deg <= 112) {
      this.renderer.setStyle(arrow, "transform", `rotate(${deg.toString()}deg)`);
      wind!.innerHTML = `${speed} м/c В`;
    }

    else if (Boolean(deg < 112) || deg <= 157) {
      this.renderer.setStyle(arrow, "transform", `rotate(${deg.toString()}deg)`);
      wind!.innerHTML = `${speed} м/c ЮВ`;
    }

    else if (Boolean(deg < 157) || deg <= 202) {
      this.renderer.setStyle(arrow, "transform", `rotate(${deg.toString()}deg)`);
      wind!.innerHTML = `${speed} м/c Ю`;
    }

    else if (Boolean(deg < 202) || deg <= 247) {
      this.renderer.setStyle(arrow, "transform", `rotate(${deg.toString()}deg)`);
      wind!.innerHTML = `${speed} м/c ЮЗ`;
    }

    else if (Boolean(deg < 247) || deg <= 292) {
      this.renderer.setStyle(arrow, "transform", `rotate(${deg.toString()}deg)`);
      wind!.innerHTML = `${speed} м/c З`;
    }

    else if (Boolean(deg < 292) || deg <= 359) {
      this.renderer.setStyle(arrow, "transform", `rotate(${deg.toString()}deg)`);
      wind!.innerHTML = `${speed} м/c СЗ`;
    }
  }

  ngOnInit(): void {

    this.getUrlCity.getCity()
      .subscribe(
        (data: any) => {

          //console.log(data);

          this.weater.temp = (Math.round(data.main.temp - 273)).toString() + '°';

          this.weater.city = data.name;

          this.weater.img = document.querySelector('.this-day_icon')!.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;

          this.weater.feels_like = (Math.round(data.main.feels_like - 273)).toString() + '°';

          this.weater.pressure = (Math.round(data.main.pressure * 0.75)).toString();

          let description = data.weather[0].description;
          this.weater.description = description[0].toUpperCase() + description.slice(1);


          this.getDirectionOfTheWind(data.wind.speed, data.wind.deg)
        }
      )
  }

  // ngAfterViewInit() {
  //   // this.city = this.header.getSelectValue();
  //   // Observable.fromEvent(document.getElementsByTagName('select'), 'change').subscribe(e => {
  //   //   this.city = this.header.getSelectValue();
  //   // });

  //    this.city = this.header.getSelectValue()[1];
  //   Observable.fromEvent(document.getElementsByTagName('select'), 'change').subscribe(e => {
  //     this.city = this.header.getSelectValue()[1];
  //   });
  // }


}
