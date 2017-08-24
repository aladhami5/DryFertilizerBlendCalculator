import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalculatorProvider } from '../../providers/calculator/calculator';

/**
 * Generated class for the FertilizerProductsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fertilizer-products',
  templateUrl: 'fertilizer-products.html',
})
export class FertilizerProductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public calculatorModule: CalculatorProvider) {
  }

  ionViewDidLoad() {
  }

  OpenPage(pageName: string) {
    this.navCtrl.push(pageName)
  }

}
