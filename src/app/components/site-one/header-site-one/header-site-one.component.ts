import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-site-one',
  templateUrl: './header-site-one.component.html',
  styleUrls: ['./header-site-one.component.scss']
})
export class HeaderSiteOneComponent implements OnInit {

  constructor() { }

  public logo: string = '';

  resize_info() {
    innerWidth < 375 ? this.logo = 'ML' : this.logo = 'My Library';
  }

  ngOnInit(): void {
    this.resize_info();
    window.onresize = () => { this.resize_info(); };
  }
}
