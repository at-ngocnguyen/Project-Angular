import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  data: any
  constructor(
    private apiService: ApiService,
    private localer: LocalerService,
    private auth: AuthService,
  ) { }
  email = this.localer.getLocalStorage('TOKEN') ? this.localer.getLocalStorage('TOKEN').email : ''
  ngOnInit(): void {
    this.apiService.get(ENDPOINT.users, '?email=' + this.email).subscribe(e => {
      this.data = e[0].favorite
      console.log(this.data[0].favorite)
    })
  }


}
