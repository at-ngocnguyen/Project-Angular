import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData: any;
  pass: string;
  email: string;

  constructor(
    private ath: AuthService,
    private apiService: ApiService,
    private router: Router,
    private local: LocalerService
  ) { }

  getUser() {
    this.apiService.get(ENDPOINT.users, '').subscribe(e => {
      this.userData = e
    })
  }

  doLogin(form) {
    console.log("LoginComponent -> doLogin -> form", form)
    let status = false;
    for (let i = 0; i < this.userData.length; i++) {
      if (this.userData[i].email === form.value.mail || this.userData[i].password === form.value.pass) {
        status = true
        this.ath.changeSatusLogin(status);
        this.local.saveLocalStorage({ email: this.email }, 'TOKEN')
        this.router.navigateByUrl('/')
      }
    }
  }

  ngOnInit(): void {
    this.getUser()
  }

}
