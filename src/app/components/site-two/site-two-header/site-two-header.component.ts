import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from '@reactivex/rxjs';
import { SiteTwoSelectComponent } from '../site-two-select/site-two-select.component';

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

  @ViewChild(SiteTwoSelectComponent, { static: false })
  select!: SiteTwoSelectComponent;

  @Output() getSelectValue() {
    // return this.select.selectValue;
    return [this.select.selectValue, this.select.selectLabel];
  }

  ngOnInit(): void {
  }
}
