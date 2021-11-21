import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'site-one-header',
  templateUrl: './site-one-header.component.html',
  styleUrls: ['./site-one-header.component.scss']
})
export class SiteOneHeaderComponent {

  logo: string = '';
  
  constructor(private element: ElementRef) {

    this.resize_info()
    window.onresize = () => { this.resize_info(); };
    //window.onload = () => { this.resize_info(); };
    
  }
  resize_info() {
    if (innerWidth < 321) this.logo = 'ML';
    else this.logo = 'My Library'; 
  }
  
}
