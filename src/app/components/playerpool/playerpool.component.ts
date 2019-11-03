import { Component, OnInit } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { Player } from '../../interfaces/player';
import { PlayerPool } from '../../interfaces/player-pool';

@Component({
  selector: 'app-playerpool',
  templateUrl: './playerpool.component.html',
  styleUrls: ['./playerpool.component.scss']
})
export class PlayerpoolComponent implements OnInit {

  thePlayerPool: PlayerPool;
  players: any[];
  constructor() { }

  ngOnInit() {

    this.getPlayers();
  }

  // players: Record<string, Player>;

  // playerPrice: number;
  // playerName: string;
  // playerPool: number;

getPlayers(): void {

  // const player1: Player = { playerName: 'Player 1' , playerPrice: 1000, playerPool: 123 };
  // const player2 = [{ playerName: 'Player 2' , playerPrice: '2000', playerPool: 123 }];
  // const player3 = [{ playerName: 'Player 3' , playerPrice: '3000', playerPool: 123 }];
  // const player4 = [{ playerName: 'Player 4' , playerPrice: '4000', playerPool: 123 }];
  // const player5 = [{ playerName: 'Player 5' , playerPrice: '5000', playerPool: 123 }];

  // const myArray = [
  //   { age : 25 },
  //   { age : 30 }
  // ];
  // this.myArray = myArray;

  //  const myArray = [
  //   {
  //     players : {
  //       player: {
  //         playerName: 'Player 1' ,
  //         playerPrice: 1000,
  //         playerPool: 123 
//}
  //       },
  //       player: {
  //         playerName: 'Player 2' ,
  //         playerPrice: 1000,
  //         playerPool: 123 }
  //       },
  // ];

//   <tr>
//   <td>{{player.playerPosition}}</td>
//   <td><strong>{{player.playerName}}</strong></td>
//   <td>{{player.playerPlayerTeams}}</td>
//   <td>{{player.playerGameDate}}</td>
//   <td>${{player.playerAwayTeam}} @ {{player.playerHomeTeam}}</td>
// </tr>
// <tr>
//       <td><strong>{{player.playerPrice}}</strong></td>
//       <td>{{player.playerFFPG}}</td>
//       <td>{{player.playerOPRK}}</td>
// </tr>



   // characters: Character[] = [
    const players = [
    {
      playerName: 'Aaron Rogers',
      playerPrice: 1000,
      playerPool: 123,
      playerPosition: 'QB',
      playerGameDate: new Date(2019, 10, 10, 13, 0, 0, 0 ),
      playerAwayTeam: 'GB',
      playerHomeTeam: 'DAL',
      playerFFPG: '30.0',
      playerOPRK: '11'
    },
    {
      playerName: 'Joe Flacco',
      playerPrice: 2000,
      playerPool: 123,
      playerPosition: 'QB',
      playerGameDate: new Date(2019, 10, 10, 13, 0, 0, 0 ),
      playerAwayTeam: 'DEN',
      playerHomeTeam: 'ATL',
      playerFFPG: '30.0',
      playerOPRK: '11'
    },
    {
      playerName: 'Sam Darnold',
      playerPrice: 3000,
      playerPool: 123,
      playerPosition: 'QB',
      playerGameDate: new Date(2019, 10, 10, 13, 0, 0, 0 ),
      playerAwayTeam: 'NYJ',
      playerHomeTeam: 'NYG',
      playerFFPG: '30.0',
      playerOPRK: '11'
    },
    {
      playerName: 'Sam Darnold',
      playerPrice: 4000,
      playerPool: 123,
      playerPosition: 'QB',
      playerGameDate: new Date(2019, 10, 10, 13, 0, 0, 0 ),
      playerAwayTeam: 'Jets',
      playerHomeTeam: 'Giants',
      playerFFPG: '30.0',
      playerOPRK: '11'
    },
    {
      playerName: 'Russell Wilson',
      playerPrice: 5000,
      playerPool: 123,
      playerPosition: 'QB',
      playerGameDate: new Date(2019, 10, 10, 13, 0, 0, 0 ),
      playerAwayTeam: 'Falcons',
      playerHomeTeam: 'DAL',
      playerFFPG: '30.0',
      playerOPRK: '11'
    }
  ];
    this.players = players;

  //  this.myArray = myArray;

              // player: { playerName: 'Player 1' , playerPrice: 1000, playerPool: 123 }
          // player: { playerName: 'Player 2' , playerPrice: 2000, playerPool: 123 },
          // player: { playerName: 'Player 3' , playerPrice: 3000, playerPool: 123 },
          // player: { playerName: 'Player 4' , playerPrice: 4000, playerPool: 123 },
          // player: { playerName: 'Player 5' , playerPrice: 5000, playerPool: 123 }



//    const thePlayerPool
//    = {
//    players : {
//        playerPrice: 10,
//        playerName: 'Hello',
//        playerPool: 123
//    }
//  }
//  ;

//    this.thePlayerPool = thePlayerPool;

 // {
    //   '123'
      // 1: { playerName: 'Player 1' , playerPrice: 1000, playerPool: 123 },
      // 2: { playerName: 'Player 2' , playerPrice: 2000, playerPool: 123 },
      // 3: { playerName: 'Player 3' , playerPrice: 3000, playerPool: 123 },
      // 4: { playerName: 'Player 4' , playerPrice: 4000, playerPool: 123 },
      // 5: { playerName: 'Player 5' , playerPrice: 5000, playerPool: 123 }
    // }



    // players:
    //     {
           // player: { playerName: 'Player 1' , playerPrice: 1000, playerPool: 123 }

          // player: { playerName: 'Player 2' , playerPrice: 2000, playerPool: 123 },
          // player: { playerName: 'Player 3' , playerPrice: 3000, playerPool: 123 },
          // player: { playerName: 'Player 4' , playerPrice: 4000, playerPool: 123 },
          // player: { playerName: 'Player 5' , playerPrice: 5000, playerPool: 123 }


          // 123: player1
          // 1: { playerName: 'Player 1' , playerPrice: 1000, playerPool: 123 },
          // 2: { playerName: 'Player 2' , playerPrice: 2000, playerPool: 123 },
          // 3: { playerName: 'Player 3' , playerPrice: 3000, playerPool: 123 },
          // 4: { playerName: 'Player 4' , playerPrice: 4000, playerPool: 123 },
          // 5: { playerName: 'Player 5' , playerPrice: 5000, playerPool: 123 }
      //   }
      // }
    // ;

}
}
