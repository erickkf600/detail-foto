import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { GaleriaPage } from './home';

@NgModule({
  declarations: [
    GaleriaPage,
  ],
  imports: [
    IonicPageModule.forChild(GaleriaPage),
  ],
})
export class GaleriaPageModule {}
