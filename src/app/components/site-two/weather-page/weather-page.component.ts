import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { debounceTime, distinct } from 'rxjs';

import { GetUrlCityService } from 'src/app/services/twoSite/get-url-city.service';

import { IWeather } from 'src/assets/Interfaces/IWeather';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
  providers: [GetUrlCityService],
})
export class WeatherPageComponent implements OnInit {

  constructor(private getUrlCity: GetUrlCityService, private renderer: Renderer2) { }


  public dateNow = new Date().getDate();
  public months: Array<string> = ['янв.', 'фев.', 'мар.', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'];
  public dayOfWeek: Array<string> = ['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.'];
  public month = this.months[new Date().getMonth()]

  public weather: IWeather = {
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

  public weatherCards: any = [];


  //Arrow of a direction of the wind
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

    // Get data for today
    this.getUrlCity.getCity()
      .subscribe(
        (data: any) => {
          this.weather.city = data.name;
        }
      )

    // Get data for this week 
    this.getUrlCity.getCityWeatherForSevenDays()
      .pipe(debounceTime(1500),
        distinct())
      .subscribe(
        (data: any) => {

          let tomorrow = new Date();

          for (let i = 1; i < 7; i++) {

            tomorrow.setDate(tomorrow.getDate() + 1);

            let card = {
              img: `https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`,
              temperature: Math.round(data.daily[i].temp.day - 273).toString() + '°',
              feels_like: Math.round(data.daily[i].feels_like.day - 273).toString() + '°',
              description: data.daily[i].weather[0].description.charAt(0).toUpperCase() + data.daily[i].weather[0].description.slice(1),
              date: tomorrow.getDate(),
              month: this.months[tomorrow.getMonth()],
              dayOfWeek: this.dayOfWeek[tomorrow.getDay()],
            }

            this.weatherCards.push(card)
          }

          // for (let i = 1; i < 135; i++) {



          //   console.log(tomorrow.getDate() + " " + this.months[tomorrow.getMonth()])
          //   //console.log(month)

          //   tomorrow.setDate(tomorrow.getDate() + 1);
          // }
          // console.log(this.weatherCards)

          //The data for today
          this.weather.temp = (Math.round(data.current.temp - 273)).toString() + '°';

          this.weather.img = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;

          this.weather.feels_like = (Math.round(data.current.feels_like - 273)).toString() + '°';

          this.weather.pressure = (Math.round(data.current.pressure * 0.75)).toString();

          let description = data.current.weather[0].description;
          this.weather.description = description[0].toUpperCase() + description.slice(1);

          this.getDirectionOfTheWind(data.current.wind_speed, data.current.wind_deg)

          

        }
      )
  }
}
