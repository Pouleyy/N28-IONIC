import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
//import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http'; 


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private results;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public toastCtrl: ToastController,
      private user:HttpClient) {
  
  }
  logForm(form) {    
    this.user.put('http://localhost:3636/auth/login',form.value)
    .subscribe(
      data => {
          this.Login();
      }
    );
    
  }
  Login() {
    this.presentToast("lol");
  }
  Signup() {
    this.navCtrl.push(SignupPage);
  }
  presentToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 1,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      this.navCtrl.push(TabsPage);
    });
    toast.present();
  }
}
