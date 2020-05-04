import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';

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
  categoryId: number;
  category: any;
  idUser = this.localer.getLocalStorage('TOKEN') ? this.localer.getLocalStorage('TOKEN').currentUser.id : false
  curentFa: any;
  constructor(
    private auth: AuthService,
    private apiService: ApiService,
    private localer: LocalerService,
    public activateRoute: ActivatedRoute,
  ) { }

  checkFa() {
    if (this.idUser) {
      this.apiService.get(ENDPOINT.users, '/' + this.idUser).subscribe(e => {
        this.curentFa = JSON.parse(e.favorite)
        for (let i = 0; i < this.curentFa.length; i++) {
          if (this.data.id === this.curentFa[i].id) {
            this.curentFa[i].state = true;
            this.data = this.curentFa[i]
            break;
          }
        }
      }
      );
    }
  }

  getDetail(id: number) {
    if (id > 0) {
      if (id >= 1 && id <= 10) {
        this.categoryId = 1;
      } else if (id <= 20) {
        this.categoryId = 2;
      } else {
        this.categoryId = 3
      }
    }
    this.apiService.get(ENDPOINT.category, '/' + this.categoryId + '/products/' + id).subscribe(e => {
      this.data = e
      this.checkFa();

    })
  }


  ngOnInit(): void {

    this.activateRoute.params.subscribe(data => {
      this.getDetail(data.id)
    })

    this.auth.currentStatus.subscribe(e => {
      this.isLogin = e
    });

    this.apiService.get(ENDPOINT.category, '/' + this.categoryId + '/products?page=1&limit=4').subscribe(e => {
      this.category = e
    });

    if (this.categoryId == 1) {
      this.ctg = 'Thuốc kê đơn'
    } else if (this.categoryId == 2) {
      this.ctg = 'Thuốc không kê đơn'
    } else {
      this.ctg = 'Thực phẩm chức năng'
    }
  }
}
