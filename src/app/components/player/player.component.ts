import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  playerPrice: number;
  playerName: string;
  playerPool: number;
  playerPosition: string;
  playerFFPG: number;
  playerOPRK: number;

  // TODO: Read from game data
  playerGameDate: Date;
  // TODO: Make into complex object of game
  playerPlayerHomeTeam: string;
  playerPlayerAwayTeam: string;
  constructor() {

  }

  ngOnInit() {
    this.playerPool = 123;
    this.playerName = 'The Player Name';
    this.playerPrice = 5700;
  }
}
