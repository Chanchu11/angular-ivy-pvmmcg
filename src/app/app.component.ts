import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  player1Name = 'Chanchal';
  player2Name = 'Durba';
  player1Score = 0;
  player2Score = 0;
  player1ScoreList = [];
  player2ScoreList = [];
  player1Total =0;
  player2Total =0;
  Winner = "";
  stopGame = false;


  game(playerNo : number) {
    const points = Math.floor(Math.random() * 6 ) +1;
    if (playerNo === 1) {
      this.player1Score = points;
      this.player1ScoreList.push(points);
      this.player1Total += points; 
      if (this.player1Total >= 15) {
        this.Winner = this.player1Name;
        this.stopGame = true;
      }
      localStorage.setItem("Player1",JSON.stringify(this.player1ScoreList));
    }
    else {
      this.player2Score = points;
      this.player2ScoreList.push(points);
      this.player2Total += points;
      if (this.player2Total >= 15) {
        this.Winner = this.player2Name;
        this.stopGame = true;
      }
      localStorage.setItem("Player2",JSON.stringify(this.player2ScoreList));
    }
  }
}
