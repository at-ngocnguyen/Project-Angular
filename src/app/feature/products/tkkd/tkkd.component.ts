import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-tkkd',
  templateUrl: './tkkd.component.html',
  styleUrls: ['./tkkd.component.scss']
})
export class TkkdComponent implements OnInit {

  data: any;
  isLogin: boolean;
  constructor(
    private apiService: ApiService,
    private localer: LocalerService,
    private auth: AuthService,
    private route: Router,
    private userService: UserService
  ) { }
  getDetail(product) {
    this.localer.saveLocalStorage({ currentProduct: product }, 'DETAIL');
    this.userService.changeProduct(product)
    this.route.navigateByUrl('/detail/' + product.id)
  }
  ngOnInit(): void {
    this.auth.currentStatus.subscribe(e => this.isLogin = e);
    this.apiService.get(ENDPOINT.category, '/2/products').subscribe(e => {
      this.data = e;
    })
  }

}
