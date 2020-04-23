import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth/auth.service';


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
  dataUser: any;
  rePass: string;
  pass: string;
  email: string;
  fullName: string;

  constructor(
    private api: ApiService,
    private route: Router,
    private auth: AuthService
  ) {

  }
  getUser() {
    this.api.get(ENDPOINT.users, '').subscribe(e => {
      this.dataUser = e;
    })
  }

  ngOnInit() {
    this.getUser()
  }

  checkEmail(mail) {
    let wasRegister = false;
    for (let i = 0; i < this.dataUser.length; i++) {
      if (this.dataUser[i].email === mail) {
        wasRegister = true;
        break
      }
    }
    return wasRegister
  }

  doRegister(form) {
    let currentUser = {
      id: this.dataUser.length + 1, ...form.value, favorite: []
    }
    if (!this.checkEmail(form.value.email)) {
      this.api.post(ENDPOINT.users, currentUser);
      this.route.navigateByUrl('/login')
    }
  }
}