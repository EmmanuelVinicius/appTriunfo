import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PerfilPage } from '../pages/perfil/perfil';
import { CadastroDeLivroPage } from '../pages/cadastro-de-livro/cadastro-de-livro';
import { LojaPage } from '../pages/loja/loja';
import { LivrosPage } from '../pages/livros/livros';


import { PaginaInicialPage } from '../pages/pagina-inicial/pagina-inicial';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = PaginaInicialPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPaginaInicial(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PaginaInicialPage);
  }goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PerfilPage);
  }goToCadastroDeLivro(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CadastroDeLivroPage);
  }goToLoja(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LojaPage);
  }goToLivros(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LivrosPage);
  }
}
