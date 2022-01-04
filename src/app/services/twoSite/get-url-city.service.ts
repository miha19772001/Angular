import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUrlCityService {

  constructor(private http: HttpClient) { }

  public getCityWeatherForSevenDays(): Observable<Object> {
    return this.http.get('https://api.openweathermap.org/data/2.5/onecall?lat=56.328674&lon=44.002048&exclude=delay&appid=c9d1ec4b029dada89104c4eff22b0229&lang=ru');
  }
}

