import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/IUser';
import { IResult } from '../models/IResult';

@Injectable({
  providedIn: 'root'
})
export class DefaultUserService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Returns list of user
   */
  getUser(page: number = 1): Observable<IResult<IUser>> {
    return this.httpClient.get('https://reqres.in/api/users', {
      params: { page: page.toString() }
    }) as Observable<IResult<IUser>>;
  }
}
