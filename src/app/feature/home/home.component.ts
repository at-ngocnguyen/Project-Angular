import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tkd: any;
  tkkd: any;
  tpcn: any;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.apiService.get(ENDPOINT.products, '/?category=1&_limit=4').subscribe(e => {
      this.tkd = e
    });
    this.apiService.get(ENDPOINT.products, '/?category=2&_limit=4').subscribe(e => {
      this.tkkd = e
    });
    this.apiService.get(ENDPOINT.products, '/?category=3&_limit=4').subscribe(e => {
      this.tpcn = e
    });
  }
  

}
