import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: number
  data: any;
  isLogin: boolean;
  ctg: string;
  category: any;
  idUser = this.localer.getLocalStorage('TOKEN') ? this.localer.getLocalStorage('TOKEN').currentUser.id : false
  curentFa: any
  constructor(
    private local: LocalerService,
    private auth: AuthService,
    private apiService: ApiService,
    private localer: LocalerService,
    private route: Router,
    private activateRoute: ActivatedRoute
  ) { }
  getDetail(product) {
    this.localer.saveLocalStorage(product, 'DETAIL')
    this.route.navigateByUrl('detail')
  }
  checkFa() {
    if (this.idUser) {
      this.apiService.get(ENDPOINT.users, '/' + this.idUser).subscribe(e => {

        this.curentFa = e.favorite

        if (this.data.id === this.curentFa.id) {
          this.curentFa.state = true;
          this.data = this.curentFa

        }
      }
      );
    }
  }
  ngOnInit(): void {


    this.data = this.local.getLocalStorage('DETAIL');

    this.checkFa();
    this.auth.currentStatus.subscribe(e => {
      this.isLogin = e;
    })
    this.activateRoute.params.subscribe(e => {
      console.log(e);
    })
    this.apiService.get(ENDPOINT.category, '/' + this.data.categoryId + '/products?page=1&limit=4').subscribe(e => {
      console.log(e);
      this.category = e
    });


    if (this.data.categoryId == 1) {
      this.ctg = 'Thuốc kê đơn'
    } else if (this.data.categoryId == 2) {
      this.ctg = 'Thuốc không kê đơn'
    } else {
      this.ctg = 'Thực phẩm chức năng'
    }
  }
}
