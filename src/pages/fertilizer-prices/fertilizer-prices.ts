import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalculatorProvider } from '../../providers/calculator/calculator';

/**
 * Generated class for the FertilizerPricesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fertilizer-prices',
  templateUrl: 'fertilizer-prices.html',
})
export class FertilizerPricesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public calculatorModule: CalculatorProvider) {
  }

  ionViewDidLoad() {
  }

  calculate() {
    let PN = [0, 0.11, 0.12, 0.18];
    let PP = [0, 0.52, 0.51, 0.46];
    let SP = [0, 0, 0, 0, 0.33, 0.4];
    let SS = [0, 0.24, 0.24, 0.92, 0.15, 0.1];
    let SN = [0, 0.21, 0.205, 0, 0.13, 0.12];
    let NP = [0, 0.34, 0.46];
    let KS = [0, 0.62, 0.6];
    let J41 = SP[this.calculatorModule.E14];
    let L37 = SS[this.calculatorModule.E14];
    this.calculatorModule.K5 = this.calculatorModule.G5 / L37;//required
    let J43 = J41 * this.calculatorModule.K5;
    let J44 = J43;
    let J37 = PP[this.calculatorModule.E12];
    this.calculatorModule.I5 = J44 < this.calculatorModule.E5 ? (this.calculatorModule.E5 - J44) / J37 : 0;//required
    let J39 = PN[this.calculatorModule.E12];
    let J40 = SN[this.calculatorModule.E14];
    let J47 = J40 * this.calculatorModule.K5;
    let J46 = J39 * this.calculatorModule.I5;
    let J49 = J46 + J47;
    let I37 = NP[this.calculatorModule.E10];
    this.calculatorModule.H5 = J49 < this.calculatorModule.D5 ? (this.calculatorModule.D5 - J49) / I37 : 0;//required
    let F5 = this.calculatorModule.dryFertilizerStartKTarget - this.calculatorModule.dryFertilizerStartKReading;
    let K37 = KS[this.calculatorModule.E16];
    this.calculatorModule.J5 = F5 / K37;//required

    let L5 = this.calculatorModule.H5 + this.calculatorModule.I5 + this.calculatorModule.J5 + this.calculatorModule.K5;//total blend
    let H6 = 0;
    let I6 = 0;
    let J6 = 0;
    let K6 = 0;
    let L6 = 0;
    let M5 = 0;
    if (this.calculatorModule.dryFertilizerStartUnits == this.calculatorModule.LbPerAcre) {
      H6 = this.calculatorModule.H5 * this.calculatorModule.C5 / 2205;
      I6 = this.calculatorModule.I5 * this.calculatorModule.C5 / 2205;
      J6 = this.calculatorModule.J5 * this.calculatorModule.C5 / 2205;
      K6 = this.calculatorModule.K5 * this.calculatorModule.C5 / 2205;
      L6 = L5 * this.calculatorModule.C5 / 2205;
      M5 = L5 * this.calculatorModule.C5 / 2205;
    } else {
      H6 = this.calculatorModule.H5 * (this.calculatorModule.C5 / 2.47) / 1000;
      I6 = this.calculatorModule.I5 * (this.calculatorModule.C5 / 2.47) / 1000;
      J6 = this.calculatorModule.J5 * (this.calculatorModule.C5 / 2.47) / 1000;
      K6 = this.calculatorModule.K5 * (this.calculatorModule.C5 / 2.47) / 1000;
      L6 = L5 * (this.calculatorModule.C5 / 2.47) / 1000;
      M5 = L5 / 2.47 * this.calculatorModule.C5 / 1000;
    }
    //Actual
    let D8 = (this.calculatorModule.H5 * I37) + (this.calculatorModule.I5 * J39) + (this.calculatorModule.K5 * J40);
    let E8 = (this.calculatorModule.I5 * J37) + (this.calculatorModule.K5 * J41);
    let F8 = this.calculatorModule.J5 * K37;
    let G8 = this.calculatorModule.K5 * L37;
    this.calculatorModule.dryFertilizerActualFertilityLevels = this.calculatorModule.D5.toString() + "-" + E8.toString() + "-" + F8.toString() + "-" + G8.toString();
  }

  OpenPage(pageName: string) {
    this.calculate();
    this.navCtrl.push(pageName);
  }

}
