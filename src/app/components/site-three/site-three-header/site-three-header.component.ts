import { Component, OnInit } from '@angular/core';
import { Observable } from '@reactivex/rxjs';

@Component({
  selector: 'site-three-header',
  templateUrl: './site-three-header.component.html',
  styleUrls: ['./site-three-header.component.scss']
})
export class SiteThreeHeaderComponent implements OnInit {

  logo: string = '';

  constructor() {
    window.onresize = () => { this.resize_info(); };
    this.resize_info();
  }

  resize_info() {
    Observable.fromEvent(window, 'resize').subscribe(e => {
      innerWidth < 321 ? this.logo = 'MG' : this.logo = 'My Game';
    });
    Observable.fromEvent(window, 'load').subscribe(e => {
      innerWidth < 321 ? this.logo = 'MG' : this.logo = 'My Game';
    });
  }

  ngOnInit(): void {
  }
}
