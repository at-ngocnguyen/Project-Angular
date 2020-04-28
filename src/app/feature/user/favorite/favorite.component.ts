import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  data: any;
  constructor(
    private localer: LocalerService,
    private auth: AuthService,
  ) { }
  email = this.localer.getLocalStorage('TOKEN') ? this.localer.getLocalStorage('TOKEN').email : ''
  ngOnInit(): void {
    this.auth.currentUser.subscribe(e => {
      this.data = e.favorite
    })
  }


}
