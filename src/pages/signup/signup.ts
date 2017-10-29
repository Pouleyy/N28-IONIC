import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage} from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Signup(){
    this.navCtrl.push(LoginPage);
  }
}
