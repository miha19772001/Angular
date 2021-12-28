import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from '@reactivex/rxjs';
import { SiteTwoHeaderComponent } from '../site-two-header/site-two-header.component';


@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit, AfterViewInit {


  @ViewChild(SiteTwoHeaderComponent)
  public header!: SiteTwoHeaderComponent;


  public city: string | undefined;
 

  constructor() {}



  //private URLAddress: string = `http://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=c9d1ec4b029dada89104c4eff22b0229`


  ngAfterViewInit() {
    // this.city = this.header.getSelectValue();
    // Observable.fromEvent(document.getElementsByTagName('select'), 'change').subscribe(e => {
    //   this.city = this.header.getSelectValue();
    // });

     this.city = this.header.getSelectValue()[1];
    Observable.fromEvent(document.getElementsByTagName('select'), 'change').subscribe(e => {
      this.city = this.header.getSelectValue()[1];
    });
  }

  ngOnInit(): void {

  }

}
