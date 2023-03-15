import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

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

  constructor(private toastController: ToastController) {}

  changeRoundValue(value: number) {
    this.roundValue = value;
  }

  addPointTo(team: number) {
    if (team === 1) {
      this.points.teamOne += this.roundValue;
      this.checkRoundWin()
    } else if (team === 2) {
      this.points.teamTwo += this.roundValue;
      this.checkRoundWin()
    }
    this.roundValue = 1;
  }

  checkRoundWin() {
    if (this.points.teamOne >= 12) {
      this.toastTeamWin(1);
      this.points = {
        teamOne: 0,
        teamTwo: 0
      };
      this.wins.teamOne++;
    } else if (this.points.teamTwo >= 12) {
      this.toastTeamWin(2);
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

  async toastTeamWin(teamNumber: number) {
    const toast = await this.toastController.create({
      message: `Time ${teamNumber} ganhou essa partida.`,
      duration: 1500,
      position: 'bottom',
      color: 'success'
    });

    await toast.present();
  }
}
