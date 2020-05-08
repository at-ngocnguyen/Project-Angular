import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: any; // get product data
  @Input() isLogin: boolean; // get islogin data
  constructor() { }

  ngOnInit(): void {
  }

}
