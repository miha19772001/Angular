import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appLink]',

})
export class LinkDirective {

  public innerWidth: any;


  constructor(private element: ElementRef, private renderer: Renderer2) {

    this.innerWidth = window.innerWidth;

    document.addEventListener("DOMContentLoaded", function (event) {
      window.onresize = () => { resize_info(); };
    });

    function resize_info() {
      if (innerWidth < 321) element.nativeElement.textContent = 'ML';
      else element.nativeElement.textContent = 'My Library';
    }
  }
}
