import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isTyping = false;
  constructor() { }

  ngOnInit(): void {
  }

  checkType() {
    this.isTyping = true;
  }
}
