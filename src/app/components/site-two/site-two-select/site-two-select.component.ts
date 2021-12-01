import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-two-select',
  templateUrl: './site-two-select.component.html',
  styleUrls: ['./site-two-select.component.scss']
})
export class SiteTwoSelectComponent implements OnInit {

  constructor() {
    this.changeClass()
    window.onresize = () => { this.changeClass(); };
   }

  ngOnInit(): void {
  }

  headerSelectInsite: string = "header_select-insite";
  headerSelectOutsite: string = "header_select-outsite";

  changeClass() {
    if(innerWidth > 611 ){
      return this.headerSelectInsite;
    }
    else{
      return this.headerSelectOutsite;
    }
  }
}

