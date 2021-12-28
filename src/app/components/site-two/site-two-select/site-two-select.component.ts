import { Component, OnInit } from '@angular/core';
import { Observable } from '@reactivex/rxjs';

@Component({
  selector: 'app-site-two-select',
  templateUrl: './site-two-select.component.html',
  styleUrls: ['./site-two-select.component.scss']
})
export class SiteTwoSelectComponent implements OnInit {

  constructor() {
    this.changeClass();
    window.onresize = () => { this.changeClass(); };
  }

  ngOnInit(): void {
  }

  headerSelectInsite: string = "header_select-insite";
  headerSelectOutsite: string = "header_select-outsite";

  public optionValues: string[] = ["Nizhny Novgorod", "Moscow", "Saint Petersburg"];
  public optionLabels: string[] = ["Нижний Новгород", "Москва", "Санкт-Петербург"];

  public selectValue: string | undefined = this.optionValues[0];
  public selectLabel: string |undefined = this.optionLabels[0];
 
  changeClass() {
    if (innerWidth > 611) {
      return this.headerSelectInsite;
    }
    else {
      return this.headerSelectOutsite;
    }
  }

  changeOption() {
    const value = document.querySelector('select')?.value;
    this.selectValue = value;
    if(this.selectValue === 'Nizhny Novgorod') this.selectLabel = "Нижний Новгород";
    if(this.selectValue === 'Moscow') this.selectLabel = "Москва";
    if(this.selectValue === 'Saint Petersburg') this.selectLabel = "Санкт-Петербург";
    //console.log(this.selectValue)
  }
}

