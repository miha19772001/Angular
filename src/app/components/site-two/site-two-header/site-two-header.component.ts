import { Component, OnInit} from '@angular/core';
import { Observable } from '@reactivex/rxjs';

@Component({
  selector: 'app-site-two-header',
  templateUrl: './site-two-header.component.html',
  styleUrls: ['./site-two-header.component.scss']
})
export class SiteTwoHeaderComponent implements OnInit {

  logo: string = '';

  constructor() {
    window.onresize = () => { this.resize_info(); };
    this.resize_info();
  }

  resize_info() {
    Observable.fromEvent(window, 'resize').subscribe(e => {
      innerWidth < 321 ? this.logo = 'MW' : this.logo = 'My Weather';
    });
    Observable.fromEvent(window, 'load').subscribe(e => {
      innerWidth < 321 ? this.logo = 'MW' : this.logo = 'My Weather';
    });
  }


  ngOnInit(): void {
  }
}
