import { Component, OnInit } from '@angular/core';
import { DefaultUserService } from '../../projects/user-lib/src/User/services/DefaultUser.service';
import { IResult } from '../../projects/user-lib/src/User/models/IResult';
import { IUser } from '../../projects/user-lib/src/User/models/IUser';

import { UserService } from 'user-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-sample-fetch';
  constructor(private userService: UserService) {}
}
