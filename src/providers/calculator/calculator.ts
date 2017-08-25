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

  /*constructor(public http: Http) {*/
  constructor() {
    if (!this.dryFertilizerStartUnits) {
      this.dryFertilizerStartUnits = this.KgPerHa.toString();
      this.C5 = 0;
      this.E10 = this.C41;
      this.E12 = this.C29;
      this.E16 = this.C44;
      this.E14 = this.C34;
      this.D5 = 0;
      this.E5 = 0;
      this.F5 = 0;
      this.G5 = 0;
    }
  }

  calculate() {
    let PN = [0, 0.11, 0.12, 0.18];
    let PP = [0, 0.52, 0.51, 0.46];
    let SP = [0, 0, 0, 0, 0.33, 0.4];
    let SS = [0, 0.24, 0.24, 0.92, 0.15, 0.1];
    let SN = [0, 0.21, 0.205, 0, 0.13, 0.12];
    let NP = [0, 0.34, 0.46];
    let KS = [0, 0.62, 0.6];
    let J41 = SP[this.E14];
    let G5 = this.dryFertilizerStartSTarget - this.dryFertilizerStartSReading;
    let L37 = SS[this.E14];
    let K5 = G5 / L37;//required
    let J43 = J41 * K5;
    let J44 = J43;
    let J37 = PP[this.E12];
    let I5 = J44 < this.E5 ? (this.E5 - J44) / J37 : 0;//required
    let J39 = PN[this.E12];
    let J46 = J39 * I5;
    let J40 = SN[this.E14];
    let J47 = J40 * K5;
    let J49 = J46 + J47;
    let I37 = NP[this.E10];
    let H5 = J49 < this.D5 ? (this.D5 - J49) / I37 : 0;//required
    let F5 = this.dryFertilizerStartKTarget - this.dryFertilizerStartKReading;
    let K37 = KS[this.E16];
    let J5 = F5 / K37;//required

    //let M5 = 
    let L5 = H5 + I5 + J5 + K5;//total blend
    //Actual
    let D8 = (H5 * I37) + (I5 * J39) + (K5 * J40);
    let E8 = (I5 * J37) + (K5 * J41);
    let F8 = J5 * K37;
    let G8 = K5 * L37;
  }
}
