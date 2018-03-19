import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PaginaInicialPage } from '../pages/pagina-inicial/pagina-inicial';
import { PerfilPage } from '../pages/perfil/perfil';
import { LojaPage } from '../pages/loja/loja';
import { LivrosPage } from '../pages/livros/livros';
import { CadastroDeLivroPage } from '../pages/cadastro-de-livro/cadastro-de-livro';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PaginaInicialPage,
    PerfilPage,
    LojaPage,
    LivrosPage,
    CadastroDeLivroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PaginaInicialPage,
    PerfilPage,
    LojaPage,
    LivrosPage,
    CadastroDeLivroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}