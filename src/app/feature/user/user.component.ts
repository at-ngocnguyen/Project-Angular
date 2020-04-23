import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  data: any;
  email = this.localer.getLocalStorage('TOKEN') ? this.localer.getLocalStorage('TOKEN').email : false
  constructor(
    private localer: LocalerService,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.get(ENDPOINT.users, '?email=' + this.email).subscribe(e => {
      this.data = e[0]
    });
  }

}
