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

    this.calculatorModule.L5 = this.calculatorModule.H5 + this.calculatorModule.I5 + this.calculatorModule.J5 + this.calculatorModule.K5;//total blend
    if (this.calculatorModule.dryFertilizerStartUnits == this.calculatorModule.LbPerAcre) {
      this.calculatorModule.H6 = this.calculatorModule.H5 * this.calculatorModule.C5 / 2205;
      this.calculatorModule.I6 = this.calculatorModule.I5 * this.calculatorModule.C5 / 2205;
      this.calculatorModule.J6 = this.calculatorModule.J5 * this.calculatorModule.C5 / 2205;
      this.calculatorModule.K6 = this.calculatorModule.K5 * this.calculatorModule.C5 / 2205;
      this.calculatorModule.L6 = this.calculatorModule.L5 * this.calculatorModule.C5 / 2205;
      this.calculatorModule.M5 = this.calculatorModule.L5 * this.calculatorModule.C5 / 2205;
    } else {
      this.calculatorModule.H6 = this.calculatorModule.H5 * (this.calculatorModule.C5 / 2.47) / 1000;
      this.calculatorModule.I6 = this.calculatorModule.I5 * (this.calculatorModule.C5 / 2.47) / 1000;
      this.calculatorModule.J6 = this.calculatorModule.J5 * (this.calculatorModule.C5 / 2.47) / 1000;
      this.calculatorModule.K6 = this.calculatorModule.K5 * (this.calculatorModule.C5 / 2.47) / 1000;
      this.calculatorModule.L6 = this.calculatorModule.L5 * (this.calculatorModule.C5 / 2.47) / 1000;
      this.calculatorModule.M5 = this.calculatorModule.L5 / 2.47 * this.calculatorModule.C5 / 1000;
    }
    //Actual
    let D8 = (this.calculatorModule.H5 * I37) + (this.calculatorModule.I5 * J39) + (this.calculatorModule.K5 * J40);
    let E8 = (this.calculatorModule.I5 * J37) + (this.calculatorModule.K5 * J41);
    let F8 = this.calculatorModule.J5 * K37;
    let G8 = this.calculatorModule.K5 * L37;
    this.calculatorModule.dryFertilizerActualFertilityLevels = D8.toString() + " - " + E8.toString() + " - " + F8.toString() + " - " + G8.toString();

    let M31 = this.round(this.calculatorModule.L5 != 0 ? D8 / this.calculatorModule.L5 * 100 : 0, 1);
    let N31 = this.round(this.calculatorModule.L5 != 0 ? E8 / this.calculatorModule.L5 * 100 : 0, 1);
    let O31 = this.round(this.calculatorModule.L5 != 0 ? F8 / this.calculatorModule.L5 * 100 : 0, 1);
    let P31 = this.round(this.calculatorModule.L5 != 0 ? G8 / this.calculatorModule.L5 * 100 : 0, 1);
    this.calculatorModule.L15 = M31.toString() + " - " + N31.toString() + " - " + O31.toString() + " - " + P31.toString();

    this.calculatorModule.L12 = this.calculatorModule.L5 != 0 ? (this.calculatorModule.K5 / this.calculatorModule.L5 * this.calculatorModule.L8) + (this.calculatorModule.I5 / this.calculatorModule.L5 * this.calculatorModule.J8) + (this.calculatorModule.J5 / this.calculatorModule.L5 * this.calculatorModule.K8) + (this.calculatorModule.H5 / this.calculatorModule.L5 * this.calculatorModule.I8) : 0;
    this.calculatorModule.L11 = this.calculatorModule.L12 * this.calculatorModule.M5
    if (this.calculatorModule.dryFertilizerStartUnits == this.calculatorModule.LbPerAcre) {
      this.calculatorModule.L13 = this.calculatorModule.L12 / 2205 * this.calculatorModule.L5;
    } else {
      this.calculatorModule.L13 = this.calculatorModule.L11 / this.calculatorModule.C5;
    }
    this.calculatorModule.L14 = this.calculatorModule.L13 * 2.47;
  }

  round(decimal: number, accuracy: number): number {
    return Number.parseFloat(decimal.toFixed(accuracy));
  }

  OpenPage(pageName: string) {
    this.calculate();
    this.navCtrl.push(pageName);
  }

}
