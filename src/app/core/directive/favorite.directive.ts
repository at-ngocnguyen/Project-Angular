import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { LocalerService } from '../service/localer/localer.service';
import { UserService } from '../user/user.service';
import { ApiService, ENDPOINT } from '../service/api/api.service';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {
  @Input() node: any;//get value of data object when click 
  email = this.localer.getLocalStorage('TOKEN').email
  dataUser: any;
  constructor(
    private localer: LocalerService,
    private user: UserService,
    private api: ApiService
  ) { }

  @HostListener('click', ['$event.target'])
  onClick(element: any) {

    if (element.nodeName === 'I') {//get Element has clicked

      this.api.get(ENDPOINT.users, '?email=' + this.email).subscribe(e => {

        this.dataUser = e;
        console.log(this.dataUser[0].favorite);

        let index = this.user.findIndex(this.dataUser[0].favorite, this.node);
        // let index = this.dataUser[0].favorite.findIndex(element => element.id === this.node.id);
        this.node.state = !this.node.state;

        if (this.node.state === true) {
          //style color when click
          element.style.color = "red";

          if (index == -1) {
            this.dataUser[0].favorite.push(this.node)
            this.api.put(ENDPOINT.users + '/' + this.dataUser[0].id, this.dataUser[0])
          }
        }

        else {
          this.dataUser[0].favorite.splice(index, 1)
          this.api.put(ENDPOINT.users + '/' + this.dataUser[0].id, this.dataUser[0])
          element.style.color = "grey";
        }
      });
    }
  }
}
