import { Directive, Input, HostListener } from '@angular/core';
import { LocalerService } from '../service/localer/localer.service';
import { UserService } from '../user/user.service';
import { ApiService, ENDPOINT } from '../service/api/api.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {
  @Input() node: any;//get value of data object when click 
  idUser = this.localer.getLocalStorage('TOKEN') ? this.localer.getLocalStorage('TOKEN').currentUser.id : false
  dataUser: any;
  constructor(
    private localer: LocalerService,
    private user: UserService,
    private api: ApiService,
    private route: Router
  ) { }

  @HostListener('click', ['$event.target'])
  onClick(element: any) {

    if (element.nodeName === 'I') {//get Element I has clicked
      if (this.idUser) {
        console.log(this.node);

        this.api.get(ENDPOINT.users, '/' + this.idUser).subscribe(e => {

          this.dataUser = e;
          this.dataUser.favorite = JSON.parse(this.dataUser.favorite);
          let index = this.user.findIndex(this.dataUser.favorite, this.node);
          // let index = this.dataUser.favorite.findIndex(element => element.id === this.node.id);
          this.node.state = !this.node.state;

          if (this.node.state === true) {
            //style color when click
            if (index == -1) {
              this.dataUser.favorite.push(this.node)
              this.api.putFa(ENDPOINT.users + '/' + this.dataUser.id, this.dataUser)
            }
          }
          else {
            this.dataUser.favorite.splice(index, 1)
            this.api.putFa(ENDPOINT.users + '/' + this.dataUser.id, this.dataUser)
          }
        });
      }
      else {
        let retVal = confirm('Vui lòng đăng nhập để thực hiện chức năng này!');
        if (retVal) {
          this.route.navigateByUrl('/login')
        }
      }
    }
  }
}
