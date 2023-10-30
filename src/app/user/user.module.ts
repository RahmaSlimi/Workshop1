import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    ListUserComponentComponent,
    AddNewUserComponent,
    UpdateUserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
