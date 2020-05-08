import { Injectable } from '@angular/core';
import { LocalerService } from '../localer/localer.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private local: LocalerService
  ) { }

  user = new BehaviorSubject<any>(this.local.getLocalStorage('TOKEN') ? this.local.getLocalStorage('TOKEN').currentUser : {});
  currentUser = this.user.asObservable();

  isLogin = new BehaviorSubject<boolean>(this.local.getLocalStorage('TOKEN') ? true : false);
  currentStatus = this.isLogin.asObservable();

  changeUser(user: any) {
    this.user.next(user);
  }
  changeSatusLogin(status: boolean) {
    this.isLogin.next(status);
  }
}
