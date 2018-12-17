import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/umd';
import { Fotos } from '../../model/fotos';
import { FOTOS } from "../../config/api.config";

/**
 * Generated class for the GaleriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html',
})
export class GaleriaPage {
  galleryType = 'regular';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  fotos: Fotos[] = FOTOS;

  navFotoDetalhe(fotos : Fotos){
    this.navCtrl.push('FotoDetalhePage', {fotos : fotos});
  }

}
