import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  diceValue: number = 6;
  result: number = 0;
  canRoll: boolean = true;
  previousResults: any = [];
  dice = 'assets/dice.png';
  diceRoll = 'assets/diceroll.gif';
  actualImage = this.dice;

  constructor(private alertController: AlertController) {}

  rollDice() {
    if (this.canRoll) {
      this.canRoll = false;
      this.actualImage = this.diceRoll;
      setTimeout(() => {
        this.result = Math.ceil((Math.random() * this.diceValue));
        this.previousResults.push(
          {
            result: this.result,
            diceValue: this.diceValue
          }
        );
        this.actualImage = this.dice;
        this.showResults();
        this.canRoll = true;
      }, 1500);
    }
  }

  async showResults() {
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `${this.result}`,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
