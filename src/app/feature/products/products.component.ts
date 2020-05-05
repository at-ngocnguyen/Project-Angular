import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  state1: boolean;
  state2: boolean;
  state3: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  changeActive(tag: number) {
    switch (tag) {
      case 1:
        this.state1 = true;
        this.state2 = false;
        this.state3 = false;
        break;
      case 2:
        this.state1 = false;
        this.state2 = true;
        this.state3 = false;
        break;
      case 3:
        this.state1 = false;
        this.state2 = false;
        this.state3 = true;
        break;
    }

  }
}
