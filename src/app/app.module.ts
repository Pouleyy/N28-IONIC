import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TransferPage } from '../pages/transfer/transfer';
import { ProfilPage } from '../pages/profil/profil';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

//import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    TransferPage,
    ProfilPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpClientModule
   // HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TransferPage,
    ProfilPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
