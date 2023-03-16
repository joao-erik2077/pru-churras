import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  trucoAudio = new Audio('../../assets/audio/truco.mp3');

  btFill1 = 'outline';
  btFill3 = 'solid';
  btFill6 = 'solid';
  btFill9 = 'solid';
  btFill12 = 'solid';

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
    this.resetBtnFills();

    switch (value) {
      case 1:
        this.btFill1 = 'outline';
        break;
      case 3:
        this.btFill3 = 'outline';
        break;
      case 6:
        this.btFill6 = 'outline';
        break;
      case 9:
        this.btFill9 = 'outline';
        break;
      case 12:
        this.btFill12 = 'outline';
        break;
    }
  }

  resetBtnFills() {
    this.btFill1 = 'solid';
    this.btFill3 = 'solid';
    this.btFill6 = 'solid';
    this.btFill9 = 'solid';
    this.btFill12 = 'solid';
  }

  addPointTo(team: number) {
    if (team === 1) {
      this.points.teamOne += this.roundValue;
      this.checkRoundWin()
    } else if (team === 2) {
      this.points.teamTwo += this.roundValue;
      this.checkRoundWin()
    }
    this.resetBtnFills();
    this.btFill1 = 'outline';
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
    if (team === 1 && this.points.teamOne > 0) {
      this.points.teamOne--;
    } else if (team === 2 && this.points.teamTwo > 0) {
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

  trucar() {
    this.trucoAudio.play();
  }
}
