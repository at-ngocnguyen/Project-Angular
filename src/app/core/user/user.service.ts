import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

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
