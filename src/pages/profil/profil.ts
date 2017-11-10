import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account'

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {
  public profilInfos:any;
  constructor(public navCtrl: NavController,accountprovider:AccountProvider) {
    this.profilInfos = accountprovider.getUser();
    this.getWeatherColor();
  }
  getWeatherColor(){
    if (this.profilInfos.bankAccount[0].balance < 100)
    {
      return 'red';
    }
    else if (this.profilInfos.bankAccount[0].balance < 400 )
    {
      return 'yellow';
    }
    else {
      return 'green';
    }
  }
 
}
