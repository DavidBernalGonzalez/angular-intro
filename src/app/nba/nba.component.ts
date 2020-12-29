import { Component, OnInit } from '@angular/core';

interface VerifyData {
  year: string;
  name: string;
  img: string;
  bestPlayers: Array<string>;
}

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css'],
})
export class NbaComponent implements OnInit {
  champions: VerifyData[] = [];
  constructor() {
    this.champions = [
      {
        year: '2015-16',
        name: 'Cleveland Cavaliers',
        img:
          'https://epmghispanic.media.clients.ellingtoncms.com/img/croppedphotos/2017/06/21/cle.png',
        bestPlayers: [
          'Lebron James',
          'Kyrie Irving',
          'Kevin Love',
          'J. R. Smith',
          'Anderson Varejao',
        ],
      },
      {
        year: '2014-15',
        name: 'Golden State Warriors',
        img:
          'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png',
        bestPlayers: [
          'Stephen Curry',
          'Klay Thompson',
          'Draymong Green',
          'Andrew Bogut',
          'Gestus Ezeli',
        ],
      },
      {
        year: '2013-14',
        name: 'San Antonio Spurs',
        img:
          'https://vignette.wikia.nocookie.net/mundodelbasket/images/4/48/SPURS.png/revision/latest/scale-to-width-down/340?cb=20170324114307&path-prefix=es',
        bestPlayers: [
          'Tim Duncan',
          'Tony Parker',
          'Manu Ginóbili',
          'Kawhi Leonard',
          'Tiago Splitter',
        ],
      },
    ];
  }

  ngOnInit(): void {}
}
