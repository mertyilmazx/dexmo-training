import { Component, OnInit } from '@angular/core';
import { DefaultUserService } from './services/DefaultUser.service';
import { IResult } from './models/IResult';
import { IUser } from './models/IUser';

@Component({
  selector: 'app-user',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css']
})
export class UserComponent implements OnInit {
  result: IResult<IUser>;
  /**
   *
   */
  constructor(private userService: DefaultUserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(result => (this.result = result));
  }

  changePage(pageNumber: number) {
    this.userService
      .getUser(pageNumber)
      .subscribe(result => (this.result = result));
  }
}
