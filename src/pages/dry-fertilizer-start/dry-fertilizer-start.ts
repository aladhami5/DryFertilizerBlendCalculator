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
    if (!this.calculatorModule.dryFertilizerStartUnits) {
      this.calculatorModule.dryFertilizerStartUnits = this.calculatorModule.LbPerAcre.toString();
    }
  }

  ionViewDidLoad() {

  }
  updateCalculator() {
    let readings = [
      this.calculatorModule.dryFertilizerStartNReading,
      this.calculatorModule.dryFertilizerStartPReading,
      this.calculatorModule.dryFertilizerStartKReading,
      this.calculatorModule.dryFertilizerStartSReading
    ]
    let targets = [
      this.calculatorModule.dryFertilizerStartNTarget,
      this.calculatorModule.dryFertilizerStartPTarget,
      this.calculatorModule.dryFertilizerStartKTarget,
      this.calculatorModule.dryFertilizerStartSTarget
    ]
    this.calculatorModule.dryFertilizerDesiredFertilityLevels = ""
    for (let i = 0; i < readings.length; i++) {
      let reading = readings[i];
      let target = targets[i];
      if (!reading) {
        reading = 0
      }
      if (!target) {
        target = 0
      }
      let desired = target - reading;
      if (desired < 0) {
        desired = 0
      }
      this.calculatorModule.dryFertilizerDesiredFertilityLevels += desired
      if (i < (readings.length - 1)) {
        this.calculatorModule.dryFertilizerDesiredFertilityLevels += "-"
      }
    }
    this.navCtrl.push('FertilizerProductsPage')
  }
}
