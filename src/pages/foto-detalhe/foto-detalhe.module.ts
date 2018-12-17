import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { FotoDetalhePage } from './foto-detalhe';

@NgModule({
  declarations: [
    FotoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(FotoDetalhePage),
  ],
})
export class FotoDetalhePageModule {}
