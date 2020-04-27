import { Injectable } from '@angular/core';
import { ApiService, ENDPOINT } from '../service/api/api.service';
import { LocalerService } from '../service/localer/localer.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
  ) { }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  findIndex = (array: any, obj: any) => {
    var index = -1;
    if (array.length > 0) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].id === obj.id) {
          index = i;
          break;
        }
      }
    }
    return index;
  }

}
