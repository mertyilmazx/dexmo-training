import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './User.component';
import { UserListComponent } from './components/UserList/UserList.component';
import { UserService } from './services/abstractions/User.service';
import { DefaultUserService } from './services/DefaultUser.service';

@NgModule({
  imports: [CommonModule],
  declarations: [UserComponent, UserListComponent],
  exports: [UserComponent],
  providers: [
    {
      provide: UserService,
      useClass: DefaultUserService
    }
  ]
})
export class UserModule {}
