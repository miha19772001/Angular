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

  // private keys : any = []
  // public unique() {

  //   let keys: any = [];

  //   document.addEventListener('keydown', (event) => {

  //     let code = event.code;

  //     if (!this.keys.includes(code)) {
  //       this.keys.push(code);
  //     }
  //     console.log(this.keys);
  //     //keys.find((o: string) => o == "Keyw")
  //   });
  //   document.addEventListener('keyup', (event) => {

  //     let code = event.code;
  //     this.keys.splice(code);
  //     //console.log(keys);
  //   });


  //   return this.keys;
  // }


  // public moveBall(){
  //   // let ball = document.getElementById('ball');
  //   // let player1 = document.getElementById('player1');
  //   // ball!.style.top = player1!.style.top;
  //   // ball!.style.left = player1!.style.left;
  //   // console.log(ball?.getBoundingClientRect())
  //   var canvas = document.querySelector("canvas");
  //   var context = canvas!.getContext("2d");
  //   //context!.fillStyle = "red";
  //   //context!.fillRect(10, 10, 100, 50);
  //    console.log(canvas)
  // }

  public movePlayer1() {

    let field = document.getElementById('field');
    let player1 = document.getElementById('player1');
    let ball = document.getElementById("ball");

    document.addEventListener('keypress', (event) => {

      let player1Top = player1?.getBoundingClientRect().top;
      let fieldTop = field?.getBoundingClientRect().top;

      let player1Bottom = player1?.getBoundingClientRect().bottom;
      let fieldBottom = field?.getBoundingClientRect().bottom;

      //this.unique().find((o:string) => o === 'KeyW')
      if (event.code === 'KeyW' && player1Top! >= fieldTop! + 15) {
        let goTop = player1?.offsetTop;
        player1!.style.top = goTop! - this.speedPlayer + 'px';
        //ball!.style.top = goTop! - this.speedPlayer + 'px';
      }
      //this.unique().find((o:string) => o === 'KeyS')
      else if (event.code === 'KeyS' && player1Bottom! <= fieldBottom! - 15) {
        let goTop = player1?.offsetTop;
        player1!.style.top = goTop! + this.speedPlayer + 'px';
        //ball!.style.top = goTop! + this.speedPlayer + 'px'
      }
    })
  }

  public moveBall() {

    let ball = document.getElementById("ball");
    let field = document.getElementById('field');
    let dx = 5;
    let dy = -2;

    setInterval(() => {

      let ballTop = ball!.getBoundingClientRect().top;
      let ballBottom = ball!.getBoundingClientRect().bottom;
      let ballLeft = ball!.getBoundingClientRect().left;
      let ballRight = ball!.getBoundingClientRect().right;

      let fieldTop = field!.getBoundingClientRect().top;
      let fieldBottom = field!.getBoundingClientRect().bottom;
      let fieldLeft = field!.getBoundingClientRect().left;
      let fieldRight = field!.getBoundingClientRect().right;

      if (ballTop + dy <= fieldTop || ballBottom + dy >= fieldBottom) dy = -dy;
      if (ballLeft + dx <= fieldLeft || ballRight + dy >= fieldRight) dx = -dx; 
        
      let goLeft = ball?.offsetLeft;
      ball!.style.left = goLeft! + dx + 'px';

      let goTop = ball?.offsetTop;
      ball!.style.top = goTop! + dy + 'px';
    }, 10)
  }



  public movePlayer2() {

    let field = document.getElementById('field');
    let player2 = document.getElementById('player2');

    document.addEventListener('keypress', (event) => {

      let player2Top = player2?.getBoundingClientRect().top;
      let fieldTop = field?.getBoundingClientRect().top;

      let player2Bottom = player2?.getBoundingClientRect().bottom;
      let fieldBottom = field?.getBoundingClientRect().bottom;
      //this.unique().find((o:string) => o === 'KeyI')
      if (event.code === 'KeyI' && player2Top! >= fieldTop! + 15) {
        let goTop = player2?.offsetTop;
        player2!.style.top = goTop! - this.speedPlayer + 'px';
      }
      //this.unique().find((o:string) => o === 'KeyK'
      else if (event.code === 'KeyK' && player2Bottom! <= fieldBottom! - 15) {
        let goTop = player2?.offsetTop;
        player2!.style.top = goTop! + this.speedPlayer + 'px';
      }
    })
  }
  ngOnInit(): void {
    this.movePlayer1();
    this.moveBall();
    this.movePlayer2();
  }
}

