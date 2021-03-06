import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'projects/user-lib/src/User/models/IUser';

@Component({
  selector: 'app-user-list',
  templateUrl: './UserList.component.html',
  styleUrls: ['./UserList.component.css']
})
export class UserListComponent implements OnInit {
  @Input()
  users: Array<IUser>;

  constructor() {
    this.users = [];
  }

  ngOnInit() {}
}
