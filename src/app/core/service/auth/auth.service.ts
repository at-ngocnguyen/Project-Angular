import { Injectable } from '@angular/core';
import { LocalerService } from '../localer/localer.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = new BehaviorSubject<boolean>(false);
  currentStatus = this.isLogin.asObservable();


  constructor() { }

  changeSatusLogin(status: boolean) {
    this.isLogin.next(status);
  }
}
