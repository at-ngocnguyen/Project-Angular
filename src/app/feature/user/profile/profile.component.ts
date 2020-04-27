import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isTyping = false;
  show: boolean = false;
  statePass: string = 'password';
  icon: string;
  constructor() { }

  ngOnInit(): void {

  }
  showPass() {
    this.show = !this.show
    if (this.show) {
      this.statePass = 'text';
    } else {
      this.statePass = 'password';
    }
  }
  checkType() {
    this.isTyping = true;
  }
}
