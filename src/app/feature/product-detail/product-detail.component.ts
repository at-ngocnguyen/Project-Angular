import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';

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
  category: any
  constructor(
    private local: LocalerService,
    private auth: AuthService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

    this.auth.currentStatus.subscribe(e => this.isLogin = e)
    this.data = this.local.getLocalStorage('DETAIL')
    this.apiService.get(ENDPOINT.products, '/?category=' + this.data.category + '&_limit=4').subscribe(e => {
      this.category = e
    });
    console.log(this.data);
    if (this.data.category == 1) {
      this.ctg = 'Thuốc kê đơn'
    } else if (this.data.category == 2) {
      this.ctg = 'Thuốc không kê đơn'
    } else {
      this.ctg = 'Thực phẩm chức năng'
    }
  }
}
