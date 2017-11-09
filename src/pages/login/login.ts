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
      private http:HttpClient) {
  
  }
  logForm(form) {    
    this.http.put('http://localhost:3636/auth/login',form.value)
    .subscribe(
      data => {
          this.presentToast("Connection sucessfull.",true,data);
      },err =>{
        if (err.status==401 && err.status==404)
        {
          this.presentToast("Username or password invalid.");
        }
        if (err.status==400)
        {
          this.presentToast("Write All champs")
        }
      }
    );
    
  }
  Signup() {
    this.navCtrl.push(SignupPage);
  }
  presentToast(message, ondismiss=false,data=null) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    if (ondismiss)
    {
    toast.onDidDismiss(() => {
      let user = data.user;
      let jwt = data.token;
      this.navCtrl.push(TabsPage,{
        user:user,jwt:jwt
      });
    });
    }
    toast.present();
  }
}
