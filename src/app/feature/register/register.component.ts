import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { UserService } from 'src/app/core/user/user.service';


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
  dataUser: any;
  rePass: string;
  pass: string;
  email: string;
  fullName: string;

  className: string = 'form-control';
  classMail: string = 'form-control';
  classPass: string = 'form-control';
  constructor(
    private api: ApiService,
    private route: Router,
    private userService: UserService
  ) {

  }


  ngOnInit() {
    this.api.get(ENDPOINT.users, '').subscribe(e => {
      this.dataUser = e;
    })
  }

  checkEmail(mail) {
    let isValid = true;
    console.log(this.userService.validateEmail(mail));

    if (!this.userService.validateEmail(mail)) {
      isValid = false
      console.log(isValid);

    } else {
      for (let i = 0; i < this.dataUser.length; i++) {
        if (this.dataUser[i].email === mail) {
          isValid = true;
          break;
        }
      }
    }
    if (isValid) {
      this.classMail = 'form-control is-valid'
    } else {
      this.classMail = 'form-control is-invalid'
    }

    return isValid
  }

  checkForm(pass, rePass) {

    let isValid = true;
    
    if (!pass) {
      isValid = false
    }
    if (pass !== rePass) {
      isValid = false;
    }
    if (isValid) {
      this.classPass = 'form-control is-valid'
    } else {
      this.classPass = 'form-control is-invalid'
    }
    return isValid
  }
  doRegister(form) {
    let currentUser = {
      id: this.dataUser.length + 1, ...form.value, favorite: []
    }
    if (this.checkEmail(form.value.email) && this.checkForm(form.value.pass, form.value.rePass) && form.status == 'VALID') {
      this.api.post(ENDPOINT.users, currentUser);
      this.route.navigateByUrl('/login')
    }
  }
}