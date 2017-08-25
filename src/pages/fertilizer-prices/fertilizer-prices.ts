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

  OpenPage(pageName: string) {
    this.navCtrl.push(pageName)
  }

}
