import { Component, OnInit } from '@angular/core';
import { UserService } from './services/User.service';
import { IResult } from './models/IResult';
import { IUser } from './models/IUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-sample-fetch';
  result: IResult<IUser>;
  /**
   *
   */
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(result => (this.result = result));
  }

  changePage(pageNumber: number) {
    this.userService
      .getUser(pageNumber)
      .subscribe(result => (this.result = result));
  }
}
