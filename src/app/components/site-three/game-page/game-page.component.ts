import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  public handler: any;

  constructor() { }

  private speedPlayer = 15;

  public checkPlayer1: number = 0;
  public checkPlayer2: number = 0;

  private spaceIsPress: boolean = false;

  public startGame(){
    const buttonStartGame = document.getElementById('button_start_game');
    const popUp = document.getElementById('pop_up');

    buttonStartGame?.addEventListener('click', (event) => {
      this.spaceIsPress = !this.spaceIsPress;
       
      if (this.spaceIsPress) {
        popUp?.classList.add('inactive');
      }
      else{
        popUp?.classList.remove('inactive');
      }
    });
  }

  public getPause() {

    const popUp = document.getElementById('pop_up');

    document.addEventListener('keydown', (event) => {
      if (event.code === 'Space') {
        this.spaceIsPress = !this.spaceIsPress;
        event.preventDefault();
        if (this.spaceIsPress) {
          popUp?.classList.add('inactive');
        }
        else{
          popUp?.classList.remove('inactive');
        }
      }
    });
  }

  public goHome(){
    const button = document.getElementById('button_go_home');
  }

  public movePlayer1() {

    let field = document.getElementById('field');
    let player1 = document.getElementById('player1');

    document.addEventListener('keypress', (event) => {

      let player1Top = player1?.getBoundingClientRect().top;
      let player1Bottom = player1?.getBoundingClientRect().bottom;

      let fieldTop = field?.getBoundingClientRect().top;
      let fieldBottom = field?.getBoundingClientRect().bottom;

      if (event.code === 'KeyW' && player1Top! >= fieldTop! + 15 && this.spaceIsPress === true) {
        let goTop = player1?.offsetTop;
        player1!.style.top = goTop! - this.speedPlayer + 'px';
      }

      else if (event.code === 'KeyS' && player1Bottom! <= fieldBottom! - 15 && this.spaceIsPress === true) {
        let goTop = player1?.offsetTop;
        player1!.style.top = goTop! + this.speedPlayer + 'px';
      }
    })
  }

  public moveBall() {

    let ball = document.getElementById("ball");
    let field = document.getElementById('field');
    let player1 = document.getElementById('player1');
    let player2 = document.getElementById('player2');

    let dx = 5; //5
    let dy = 2; //-2

    setInterval(() => {

      let ballTop = ball!.getBoundingClientRect().top;
      let ballBottom = ball!.getBoundingClientRect().bottom;
      let ballLeft = ball!.getBoundingClientRect().left;
      let ballRight = ball!.getBoundingClientRect().right;

      let fieldTop = field!.getBoundingClientRect().top;
      let fieldBottom = field!.getBoundingClientRect().bottom;
      let fieldLeft = field!.getBoundingClientRect().left;
      let fieldRight = field!.getBoundingClientRect().right;

      let player1Top = player1!.getBoundingClientRect().top;
      let player1Bottom = player1!.getBoundingClientRect().bottom;
      let player1Left = player1!.getBoundingClientRect().left;
      let player1Right = player1!.getBoundingClientRect().right;

      let player2Top = player2!.getBoundingClientRect().top;
      let player2Bottom = player2!.getBoundingClientRect().bottom;
      let player2Left = player2!.getBoundingClientRect().left;
      let player2Right = player2!.getBoundingClientRect().right;

      //Счёт первого игрока
      if (ballLeft + dx <= fieldLeft) this.checkPlayer2 += 1;
      //Счёт второго игрока
      if (ballRight + dy >= fieldRight) this.checkPlayer1 += 1;


      if (ballTop + dy <= fieldTop || ballBottom + dy >= fieldBottom) dy = -dy;

      if (ballLeft + dx <= fieldLeft || ballRight + dy >= fieldRight || (ballLeft + dx <= player1Right && (ballTop >= player1Top && ballBottom <= player1Bottom)) || (ballRight + dx >= player2Left && (ballTop >= player2Top && ballBottom <= player2Bottom))) dx = -dx;


      //Отражение от боков первого игрока
      if (ballTop + 3 * dy < player1Bottom && ballBottom + 3 * dy > player1Top && ballRight + 3 * dx <= player1Right) {
        dx = -dx;
        dy = -dy;
      }

      //Отражение от боков второго игрока
      if (ballTop + 3 * dy < player2Bottom && ballBottom + 3 * dy > player2Top && ballLeft + 3 * dx >= player2Left) {
        dx = -dx;
        dy = -dy;
      }

      //Остановка мячика при нажатии на Space
      if (this.spaceIsPress) {
        let goLeft = ball?.offsetLeft;
        let goTop = ball?.offsetTop;

        ball!.style.left = goLeft! + dx + 'px';
        ball!.style.top = goTop! + dy + 'px';
      }

    }, 10);
  }



  public movePlayer2() {

    let field = document.getElementById('field');
    let player2 = document.getElementById('player2');

    document.addEventListener('keydown', (event) => {

      let player2Top = player2?.getBoundingClientRect().top;
      let player2Bottom = player2?.getBoundingClientRect().bottom;

      let fieldTop = field?.getBoundingClientRect().top;
      let fieldBottom = field?.getBoundingClientRect().bottom;
      //this.unique().find((o:string) => o === 'KeyI')
      if (event.code === 'KeyI' && player2Top! >= fieldTop! + 15 && this.spaceIsPress === true) {
        let goTop = player2?.offsetTop;
        player2!.style.top = goTop! - this.speedPlayer + 'px';
      }
      //this.unique().find((o:string) => o === 'KeyK'
      else if (event.code === 'KeyK' && player2Bottom! <= fieldBottom! - 15 && this.spaceIsPress === true) {
        let goTop = player2?.offsetTop;
        player2!.style.top = goTop! + this.speedPlayer + 'px';
      }


    })
  }
  ngOnInit(): void {
    this.startGame();
    this.movePlayer1();
    this.moveBall();
    this.movePlayer2();
    this.getPause();
  }
}