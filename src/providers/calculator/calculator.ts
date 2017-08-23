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
  LbPerAcre= "lb/acre"
  KgPerHa= "kg/ha"
  dryFertilizerStartUnits: string

  dryFertilizerStartNReading: number
  dryFertilizerStartKReading: number
  dryFertilizerStartPReading: number
  dryFertilizerStartSReading: number
  dryFertilizerStartNTarget: number
  dryFertilizerStartKTarget: number
  dryFertilizerStartPTarget: number
  dryFertilizerStartSTarget: number
  dryFertilizerDesiredFertilityLevels:string

  c5: number
  /*constructor(public http: Http) {*/
  constructor() {
  }  
}
