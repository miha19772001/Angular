import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input('logo') logo: string = '';
  @Input('shortLogo') shortLogo: string = '';

  resizeInfo() {
    return innerWidth < 375 ? this.shortLogo : this.logo;
  }

  ngOnInit(): void {
    this.resizeInfo();
    window.onresize = () => { this.resizeInfo(); };
  }
}
