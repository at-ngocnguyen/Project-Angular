import { Injectable } from '@angular/core';
import { LocalerService } from '../localer/localer.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = new BehaviorSubject<boolean>(this.local.getLocalStorage('TOKEN') ? true : false);
  currentStatus = this.isLogin.asObservable();

  constructor(
    private local: LocalerService
  ) { }

  changeSatusLogin(status: boolean) {
    this.isLogin.next(status);
  }

  
}
