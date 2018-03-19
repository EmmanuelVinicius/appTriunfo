import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroDeLivroPage } from '../cadastro-de-livro/cadastro-de-livro';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  constructor(public navCtrl: NavController) {
  }
  goToCadastroDeLivro(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDeLivroPage);
  }
}
