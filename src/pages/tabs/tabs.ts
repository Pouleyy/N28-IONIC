import { Component } from '@angular/core';

import { TransferPage } from '../transfer/transfer';
import { ProfilPage } from '../profil/profil';
import { HomePage } from '../home/home';
import {NavController,NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
 
export class TabsPage {
  public jwt = this.myParams.get('jwt');
  public user = this.myParams.get('user');
  tab1Root = HomePage;
  tab2Root = TransferPage;
  tab3Root = ProfilPage;

  constructor(public navCtrl: NavController, public myParams:NavParams) {
    console.log(this.myParams)
  }
}
