import { Component, OnInit } from '@angular/core';
import { Observable } from '@reactivex/rxjs';
import { fromEvent } from 'rxjs';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Element, ElementAst } from '@angular/compiler';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  private speedPlayer = 10;

  public async movePlayer1() {


    let field = document.getElementById('field');
    let player1 = document.getElementById('player1');


    await document.addEventListener('keypress', (event) => {



      let player1Top = player1?.getBoundingClientRect().top;
      let fieldTop = field?.getBoundingClientRect().top;

      let player1Bottom = player1?.getBoundingClientRect().bottom;
      let fieldBottom = field?.getBoundingClientRect().bottom;

      if (event.code === "KeyW" && player1Top! >= fieldTop! + 10) {
        let goTop = player1?.offsetTop;
        player1!.style.top = goTop! - this.speedPlayer + 'px';
      }
      else if (event.code === "KeyS" && player1Bottom! <= fieldBottom! - 10) {
        let goTop = player1?.offsetTop;
        player1!.style.top = goTop! + this.speedPlayer + 'px';
      }
    })
  }

  public async movePlayer2() {

    let field = document.getElementById('field');
    let player2 = document.getElementById('player2');

    await document.addEventListener('keypress', (event) => {

      let player2Top = player2?.getBoundingClientRect().top;
      let fieldTop = field?.getBoundingClientRect().top;


      let player2Bottom = player2?.getBoundingClientRect().bottom;
      let fieldBottom = field?.getBoundingClientRect().bottom;

      if (event.code === "KeyI" && player2Top! >= fieldTop! + 10) {
        let goTop = player2?.offsetTop;
        player2!.style.top = goTop! - this.speedPlayer + 'px';
      }
      else if (event.code === "KeyK" && player2Bottom! <= fieldBottom! - 10) {
        let goTop = player2?.offsetTop;
        player2!.style.top = goTop! + this.speedPlayer + 'px';
      }
    })
  }


  ngOnInit(): void {
    this.movePlayer1();
    this.movePlayer2();
  }

}
