import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
//import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http'; 
import { HttpHeaders } from '@angular/common/http';
import { AccountProvider} from '../../providers/account/account';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private results;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public toastCtrl: ToastController,
      private http:HttpClient,
      public accprovider:AccountProvider) {
  
  }
  logForm(form) {
    var income = [];
    let outcome = [];
    this.http.put('http://37.59.114.40:3636/auth/login',form.value)
    .subscribe(
      data => {
         this.results = data
         let url = 'http://37.59.114.40:3636/transfer/'+ data["user"]["username"] + '/' + data["user"]["bankAccount"][0]["IBAN"]+ '/';
         this.http.get(url,
         { headers: new HttpHeaders().set('Authorization', data["token"])})
         .subscribe(
           dataTransfer => {
             let result=dataTransfer;             
             result["transfers"].forEach(element => {
               if (element.receiver ==  this.results["user"]["bankAccount"][0]["IBAN"])
               {
                income.push(element)
               }
               else
               {
                 outcome.push(element)
               }
               
             } );
             this.accprovider.setTransferIncome(income);
             this.accprovider.setTransferOutcome(outcome);
             this.accprovider.setTransfers(result["transfers"]);
             this.presentToast("Login Sucessfull",true,data)
           }
           );
         
      } ,err =>{
        if (err.status==401 || err.status==404)
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
      this.accprovider.setUser(user);
      this.accprovider.setToken(jwt);
      
      this.navCtrl.push(TabsPage);
    });
    }
    toast.present();
  }
}
