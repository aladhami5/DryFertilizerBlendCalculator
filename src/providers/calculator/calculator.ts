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

  /*constructor(public http: Http) {*/
  constructor() {
    if (!this.dryFertilizerStartUnits) {
      this.dryFertilizerStartUnits = this.KgPerHa.toString();
      this.e10 = this.c41;
      this.e12 = this.c29;
    }
  }
}
