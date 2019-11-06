import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/IUser';
import { IResult } from '../models/IResult';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Returns list of user
   */
  getUser(): Observable<IResult<IUser>> {
    return this.httpClient.get('https://reqres.in/api/users') as Observable<
      IResult<IUser>
    >;
  }
}
