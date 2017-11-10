import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account'
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  
  constructor(public navCtrl: NavController,public myAccount:AccountProvider,public http:HttpClient) {
    this.user = myAccount.getUser();
    this.token = myAccount.getToken();
    //this.profilInfos = myAccount.getUser();
    this.profilInfos = myAccount;
  }
  public profilInfos:any;  
  public user:any;
  public token:any;
  public transfers:any;
  public income:Array<any>;
  public outcome:Array<any>;
  public transferResume(){
    /*this.http.get('http://37.59.114.40:3636/transfer/'+ this.user.username + '/' + this.user.bankAccount[0].IBAN,
    { headers: new HttpHeaders().set('Authorization', this.token)})
    .subscribe(
      data => {
        return data;

        //this.myAccount.setTransfers(data["transfers"]);
        //this.setTypeOftransfers(this.myAccount.getTransfers())
      },
      err =>{
        console.log("error transfers list");
      }
    );*/
    }
    setTypeOftransfers(transfers:any)
    {
      var total = Array<any>();
      var income = Array<any>();
      var outcome = Array<any>();
      for (var index = 0; index < transfers.length; index++) {
        var element = transfers[index];
        if (element.receiver == this.myAccount.user.bankAccount[0].IBAN)
        {
          
          this.income.push(element)
        }
        else{
          
          this.outcome.push(element)
        }
      }

    }
    
}
