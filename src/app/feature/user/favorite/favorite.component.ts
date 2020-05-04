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
  user: any;
  constructor(
    private localer: LocalerService,
    private apiService: ApiService,
  ) { }
  idUser = this.localer.getLocalStorage('TOKEN') ? this.localer.getLocalStorage('TOKEN').currentUser.id : false
  ngOnInit(): void {
    this.apiService.get(ENDPOINT.users, '/' + this.idUser).subscribe(e => {
      this.user = e;
      this.data = JSON.parse(e.favorite);
      console.log(this.user);
    });
  }
  deleteFa(item) {
    let dialog = confirm('Bạn có muốn xóa sản phẩm này khỏi mục yêu thích');
    let index = this.data.findIndex(e => e.id === item.id)

    console.log(index);
    if (dialog) {
  
      this.data.splice(index, 1);

      this.user.favorite = this.data;
      this.apiService.putFa(ENDPOINT.users + '/' + this.user.id, this.user);
    }
  }

}
