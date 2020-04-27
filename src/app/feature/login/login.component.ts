import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { UserService } from 'src/app/core/user/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData: any;
  pass: string;
  email: string;
  classMail: string = 'form-control';
  classPass: string = 'form-control';
  constructor(
    private ath: AuthService,
    private apiService: ApiService,
    private router: Router,
    private local: LocalerService,
    private userService: UserService
  ) { }

  doLogin(form) {
    let isValid = false;
    if (form.touched && form.dirty) {
      for (let i = 0; i < this.userData.length; i++) {
        if (this.userService.validateEmail(form.value.email) && this.userData[i].email === form.value.email && form.status == 'VALID') {
          isValid = true;
          this.classMail = 'form-control is-valid'
          if (this.userData[i].pass === form.value.pass) {
            isValid = true;
            this.classPass = 'form-control is-valid'
          } else {
            isValid = false;
            this.classPass = 'form-control is-invalid'
          }
          break;
        } else {
          isValid = false;
          this.classPass = 'form-control is-invalid'
          this.classMail = 'form-control is-invalid'
        }

      }
    }
    if (isValid) {
      this.ath.changeSatusLogin(isValid);
      this.local.saveLocalStorage({ email: this.email }, 'TOKEN')
      this.router.navigateByUrl('/')
    }

  }

  ngOnInit(): void {
    this.apiService.get(ENDPOINT.users, '').subscribe(e => {
      this.userData = e
    })
  }

}
