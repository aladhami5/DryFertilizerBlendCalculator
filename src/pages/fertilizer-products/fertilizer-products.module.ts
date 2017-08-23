import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FertilizerProductsPage } from './fertilizer-products';

@NgModule({
  declarations: [
    FertilizerProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(FertilizerProductsPage),
  ],
})
export class FertilizerProductsPageModule {}
