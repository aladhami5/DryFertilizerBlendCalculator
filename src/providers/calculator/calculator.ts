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

  C5: number
  C40 = 1
  C41 = 2
  NDisplayNames = ["", "34-0-0", "46-0-0"]
  E10: number
  C29 = 1
  C30 = 2
  C31 = 3
  PDisplayNames = ["", "11-52-0", "12-51-0", "18-46-0"]
  E12: number
  C43 = 1
  C44 = 2
  KDisplayNames = ["", "0-0-62", "0-0-60"]
  E16: number
  C34 = 1
  C35 = 2
  C36 = 3
  C37 = 4
  C38 = 5
  SDisplayNames = ["", "21-0-0-24", "20.5-0-0-24", "0-0-0-92", "13-33-0-15", "12-40-0-10"]
  E14: number
  D5: number
  E5: number
  F5: number
  G5: number
  I8: number
  J8: number
  K8: number
  L8: number
  K5: number
  I5: number
  H5: number
  J5: number

  dryFertilizerActualFertilityLevels: string

  /*constructor(public http: Http) {*/
  constructor() {
    if (!this.dryFertilizerStartUnits) {
      this.dryFertilizerStartUnits = this.LbPerAcre.toString();
      this.dryFertilizerStartNReading = 0;
      this.dryFertilizerStartKReading = 0;
      this.dryFertilizerStartPReading = 0;
      this.dryFertilizerStartSReading = 0;
      this.dryFertilizerStartNTarget = 100;
      this.dryFertilizerStartKTarget = 30;
      this.dryFertilizerStartPTarget = 40;
      this.dryFertilizerStartSTarget = 10;
      this.C5 = 310;
      this.E10 = this.C41;
      this.E12 = this.C30;
      this.E16 = this.C43;
      this.E14 = this.C34;
    }
  }
}
