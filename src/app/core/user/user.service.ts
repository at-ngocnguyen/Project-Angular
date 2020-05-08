import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalerService } from '../service/localer/localer.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private local: LocalerService
  ) { }

  product = new BehaviorSubject<any>(this.local.getLocalStorage('DETAIL') ? this.local.getLocalStorage('DETAIL').currentProduct : {})

  currentProduct = this.product.asObservable();

  changeProduct(product: any) {
    this.product.next(product);
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  findIndex = (array: any, obj: any) => {
    let index = -1;
    if (array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === obj.id) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  checkMail(mail, userData) {
    let isValid = false;
    for (let i = 0; i < userData.length; i++) {
      if (mail === userData[i].email) {
        isValid = true;
        break;
      }
    }
    return isValid;
  }
  checkPass(pass, secondPass) {
    let isValid = false;
    if (pass === secondPass) {
      isValid = true;
    }
    return isValid;
  }


}
