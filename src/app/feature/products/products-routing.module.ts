import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { TkdComponent } from './tkd/tkd.component';
import { TkkdComponent } from './tkkd/tkkd.component';
import { TpcnComponent } from './tpcn/tpcn.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'thuockedon',
        component: TkdComponent
      },
      {
        path: 'thuockhongkedon',
        component: TkkdComponent
      },
      {
        path: 'thucphamchucnang',
        component: TpcnComponent
      },
      {
        path: ':id',
        component: ProductDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
