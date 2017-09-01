import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalculatorProvider } from '../../providers/calculator/calculator';

/**
 * Generated class for the DryFertilizerStartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dry-fertilizer-start',
  templateUrl: 'dry-fertilizer-start.html',
})
export class DryFertilizerStartPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public calculatorModule: CalculatorProvider) {
  }

  ionViewDidLoad() {

  }
  updateCalculator() {
    this.calculatorModule.D5 = this.calculatorModule.dryFertilizerStartNTarget - this.calculatorModule.dryFertilizerStartNReading;
    this.calculatorModule.E5 = this.calculatorModule.dryFertilizerStartPTarget - this.calculatorModule.dryFertilizerStartPReading;
    this.calculatorModule.F5 = this.calculatorModule.dryFertilizerStartKTarget - this.calculatorModule.dryFertilizerStartKReading;
    this.calculatorModule.G5 = this.calculatorModule.dryFertilizerStartSTarget - this.calculatorModule.dryFertilizerStartSReading;
    this.calculatorModule.dryFertilizerDesiredFertilityLevels = this.calculatorModule.D5 + " - " + this.calculatorModule.E5 + " - " + this.calculatorModule.F5 + " - " + this.calculatorModule.G5
    this.navCtrl.push('FertilizerProductsPage')
  }
}
