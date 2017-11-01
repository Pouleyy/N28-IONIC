import { Component } from '@angular/core';

import { TransferPage } from '../transfer/transfer';
import { ProfilPage } from '../profil/profil';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TransferPage;
  tab3Root = ProfilPage;

  constructor() {

  }
}
