import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular/umd';
import { Fotos } from '../../model/fotos';

@IonicPage()
@Component({
  selector: 'page-foto-detalhe',
  templateUrl: 'foto-detalhe.html',
})
export class FotoDetalhePage {

  fotos : Fotos;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fotos = this.navParams.get('fotos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FotoDetalhePage');
  }

}
