import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
  dataUser: any;
  rePass: string;
  pass: string;
  email: string;
  fullName: string;

  constructor(
    private api: ApiService
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
        console.log("RegisterComponent -> doRegister -> form.value.mail", mail)
        console.log(this.dataUser[i].email)
        wasRegister = true;
        break
      }
    }
    return wasRegister
  }

  doRegister(form) {
    let currentUser = {
      id: this.dataUser.length + 1, ...form.value
    }
    console.log("RegisterComponent -> doRegister -> currentUser", currentUser)
    if (!this.checkEmail(form.value.mail)) {
      this.api.post(ENDPOINT.users, currentUser)
      console.log('ok')
    }
  }
}