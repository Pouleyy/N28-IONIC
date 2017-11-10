import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the AccountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccountProvider {

  token: any;
  user: any;
  transfers:any;
  transferIncome:any;
  transferOutcome:any;

  constructor() {
      this.token = null;
      this.user = null;
      this.transfers = null;
      this.transferIncome=null;
      this.transferOutcome=null;
  }

  setTransferIncome(transferIncome) {
      this.transferIncome = transferIncome;       
  }
  getTransferIncome() {
      return this.transferIncome;
  } 
 
  setTransferOutcome(transferOutcome) {
    this.transferOutcome = transferOutcome;       
  }
  getTransferOutcome() {
    return this.transferOutcome;
  } 
  setUser(user) {
  this.user = user;       
  }
  getUser() {
  return this.user;
  }  
  getToken(){
    return this.token;
  }
  setToken(token){
    this.token = token;
  }
  getTransfers(){
    return this.transfers;
  }
  setTransfers(transfers){
    this.transfers = transfers;
  }
}
