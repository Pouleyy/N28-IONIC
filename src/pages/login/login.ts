import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }
  Login() {
    this.presentToast();
  }
  Signup() {
    this.navCtrl.push(SignupPage);
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Login Sucessful',
      duration: 1000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      this.navCtrl.push(TabsPage);
    });
    toast.present();
  }
}
