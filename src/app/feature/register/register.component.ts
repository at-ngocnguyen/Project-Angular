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
    this.getUser();
  }

  checkEmail(mail) {
    let isValid = true;
    if (!this.validateEmail(mail)) {
      isValid = false
    } else {
      for (let i = 0; i < this.dataUser.length; i++) {
        if (this.dataUser[i].email === mail) {
          isValid = false;
          break
        }
      }
    }
    console.log(isValid);

    return isValid
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  checkForm(pass, rePass) {


    let isValid = true;
    if (pass !== rePass) {
      isValid = false;
    }
    return isValid
  }
  doRegister(form) {

    let currentUser = {
      id: this.dataUser.length + 1, ...form.value, favorite: []
    }
    if (this.checkEmail(form.value.email) && this.checkForm(form.value.pass, form.value.rePass)) {
      this.api.post(ENDPOINT.users, currentUser);
      this.route.navigateByUrl('/login')
    }
  }
}