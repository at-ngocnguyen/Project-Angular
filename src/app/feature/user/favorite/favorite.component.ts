import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { ENDPOINT, ApiService } from 'src/app/core/service/api/api.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})

export class FavoriteComponent implements OnInit {
  data: any;
  constructor(
    private localer: LocalerService,
    private apiService: ApiService,
  ) { }
  idUser = this.localer.getLocalStorage('TOKEN') ? this.localer.getLocalStorage('TOKEN').currentUser.id : false
  ngOnInit(): void {
    this.apiService.get(ENDPOINT.users, '/' + this.idUser).subscribe(e => {
      if(e.favorite == '[]'){
        console.log(false);
      }else{
        console.log(true);
        
      }
      this.data = JSON.parse(e.favorite)
    });
  }


}
