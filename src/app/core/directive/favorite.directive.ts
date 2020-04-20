import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { LocalerService } from '../service/localer/localer.service';
import { UserService } from '../user/user.service';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {
  @Input() node: any;//get value of data object when click
  constructor(
    private localer: LocalerService,
    private user: UserService,
  ) { }

  @HostListener('click', ['$event.target'])
  onClick(element: any) {
    console.log(this.node)
    let currentFa = this.localer.getLocalStorage('FAVORITE') ? this.localer.getLocalStorage('FAVORITE') : [];
    let index = this.user.findIndex(currentFa, this.node)
    console.log("FavoriteDirective -> onClick -> index", index)
    if (element.nodeName === 'I') {
      //get Element has clicked
      this.node.state = !this.node.state;

      this.node.state ? this.node.count = parseInt(this.node.count) + 1 : this.node.count = parseInt(this.node.count) - 1;
      if (this.node.state === true) {
        if (index == -1) {
          currentFa.push(this.node);
          this.localer.saveLocalStorage(currentFa, 'FAVORITE')
        }
        element.style.color = "red";
      }
      else {
        currentFa.splice(index, 1);
        this.localer.saveLocalStorage(currentFa, 'FAVORITE')
        element.style.color = "grey";
      }
    }
  }
}
/**
 * Hướng làm tiếp theo 
 * get user theo param là ?email= {email}
 * kiểm tra trong data được get xuống có favorite chưa (làm theo currentFa) line 18
 * kiểm ở phần home.component và productlist.component phải style theo cái trạng thái favorite
**/
