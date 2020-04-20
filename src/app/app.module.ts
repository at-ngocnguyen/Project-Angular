import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './share/layout/header/header.component';
import { FooterComponent } from './share/layout/footer/footer.component';
import { HomeComponent } from './feature/home/home.component';
import { ApiService } from './core/service/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { SlideshowComponent } from './share/layout/slideshow/slideshow.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { ProductDetailComponent } from './feature/product-detail/product-detail.component';
import { UserComponent } from './feature/user/user.component';
import { ProfileComponent } from './feature/user/profile/profile.component';
import { UserGuard } from './core/service/auth/userguard.guard';
import { ProductsComponent } from './feature/products/products.component';
import { TkdComponent } from './feature/products/tkd/tkd.component';
import { TkkdComponent } from './feature/products/tkkd/tkkd.component';
import { TpcnComponent } from './feature/products/tpcn/tpcn.component';
import { FormsModule } from '@angular/forms';
import { FavoriteDirective } from './core/directive/favorite.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SlideshowComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailComponent,
    UserComponent,
    ProfileComponent,
    ProductsComponent,
    TkdComponent,
    TkkdComponent,
    TpcnComponent,
    FavoriteDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApiService,
    UserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
