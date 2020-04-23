import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: number
  data: any;
  isLogin: boolean
  constructor(
    private local: LocalerService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.currentStatus.subscribe(e => this.isLogin = e)
    this.data = this.local.getLocalStorage('DETAIL')
    console.log(this.data);

  }
}
