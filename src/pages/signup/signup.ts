import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HttpClient } from '@angular/common/http';
import { ToastController } from 'ionic-angular';
import { HttpHeaders } from '@angular/common/http';


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

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public toastCtrl: ToastController) {
  }

  Register(form) {
    this.RegistrerUser(form);
  }
  RegistrerUser(form:any) {
    if (form.value.username != null
      && form.value.email != null
      && form.value.password != null
      && form.value.passwordConfirm != null)
      if (form.value.password == form.value.passwordConfirm) {
        const body = {
          username: form.value.username,
          password: form.value.password,
          email: form.value.email
        }
        this.http.post('http://37.59.114.40:3636/auth/signup', body)
          .subscribe( 
          data => {
              this.presentToast("Sucessfull create user", true);
          }
          ,err =>{
            if (err.status == 400) {
              this.presentToast("Mail or password invalid : \n Please Enter Correct mail and password with 6 characters or more.");
            }
            if (err.status == 401 || err.status == 500) {
              this.presentToast("User or Email already exist.");
            }
          }
            );
      }
      else {
        this.presentToast("Password are not same");
      }
    else {
      this.presentToast("Please enter all champs");
    }
  }
  presentToast(message, Ondismiss = false) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    if (Ondismiss) {
      toast.onDidDismiss(() => {
        this.navCtrl.push(LoginPage);
      });
    }
    toast.present();
  }
}
