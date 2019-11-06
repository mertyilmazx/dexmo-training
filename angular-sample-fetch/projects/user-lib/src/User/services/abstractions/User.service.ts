import { IResult } from 'user-lib/User/models/IResult';
import { IUser } from 'user-lib/User/models/IUser';
import { Observable } from 'rxjs';

export abstract class UserService {
  abstract getUser(page: number): Observable<IResult<IUser>>;
}
