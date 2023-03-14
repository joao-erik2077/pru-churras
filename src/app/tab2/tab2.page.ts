import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  roundValue = 1;
  points = {
    teamOne: 0,
    teamTwo: 0
  };
  wins = {
    teamOne: 0,
    teamTwo: 0
  };

  constructor() {}

  changeRoundValue(value: number) {
    this.roundValue = value;
  }

  addPointTo(team: number) {
    if (team === 1) {
      this.points.teamOne++;
      this.checkRoundWin()
    } else if (team === 2) {
      this.points.teamTwo++;
      this.checkRoundWin()
    }
  }

  checkRoundWin() {
    if (this.points.teamOne >= 12) {
      this.points = {
        teamOne: 0,
        teamTwo: 0
      };
      this.wins.teamOne++;
    } else if (this.points.teamTwo >= 12) {
      this.points = {
        teamOne: 0,
        teamTwo: 0
      };
      this.wins.teamTwo++;
    }
  }

  removePointFrom(team: number) {
    if (team === 1) {
      this.points.teamOne--;
    } else if (team === 2) {
      this.points.teamTwo--;
    }
  }

  addWinTo(team: number) {
    if (team === 1) {
      this.wins.teamOne++;
    } else if (team === 2) {
      this.wins.teamTwo++;
    }
  }

  clear() {
    this.roundValue = 1;
    this.points = {
      teamOne: 0,
      teamTwo: 0
    };
    this.wins = {
      teamOne: 0,
      teamTwo: 0
    };
  }
}
