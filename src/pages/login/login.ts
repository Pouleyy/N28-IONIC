import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { TabsPage} from '../tabs/tabs'
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    login(){
    this.navCtrl.push(TabsPage);
    }
    signup(){
    this.navCtrl.push(SignupPage);
    }
}
