import { Injectable } from '@angular/core';
/*import { Http } from '@angular/http';
import 'rxjs/add/operator/map';*/

/*
  Generated class for the CalculatorProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CalculatorProvider {
  LbPerAcre = "lb/acre"
  KgPerHa = "kg/ha"
  dryFertilizerStartUnits: string

  dryFertilizerStartNReading: number
  dryFertilizerStartKReading: number
  dryFertilizerStartPReading: number
  dryFertilizerStartSReading: number
  dryFertilizerStartNTarget: number
  dryFertilizerStartKTarget: number
  dryFertilizerStartPTarget: number
  dryFertilizerStartSTarget: number
  dryFertilizerDesiredFertilityLevels: string

  c5: number
  c40 = 1
  c41 = 2
  d40 = "34-0-0"
  d41 = "46-0-0"
  e10: number
  c29 = 1
  c30 = 2
  c31 = 3
  d29 = "11-52-0"
  d30 = "12-51-0"
  d31 = "18-46-0"
  e12: number
  c43 = 1
  c44 = 2
  d43 = "0-0-62"  
  d44 = "0-0-60"
  e16: number
  c34 = 1
  c35 = 2
  c36 = 3
  c37 = 4
  c38 = 5
  d34 = "21-0-0-24"
  d35 = "20.5-0-0-24"
  d36 = "0-0-0-92"
  d37 = "13-33-0-15"
  d38 = "12-40-0-10"
  e14: number  

  /*constructor(public http: Http) {*/
  constructor() {
    if (!this.dryFertilizerStartUnits) {
      this.dryFertilizerStartUnits = this.KgPerHa.toString();
      this.e10 = this.c41;
      this.e12 = this.c29;
      this.e16 = this.c44;
      this.e14 = this.c34;
    }
  }
}
