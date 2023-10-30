import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  /*{path: "users", component:ListUserComponentComponent},
  {path: "addUser", component: AddNewUserComponent},*/
  /*{path: "", component : ListUserComponentComponent,
  children:[{path:"addUser",component:AddNewUserComponent},]},*/
  
  {path:"",component:ListUserComponentComponent,children:[{path:"addUser", component:AddNewUserComponent}]},
  {path:"editUser/:param",component:UpdateUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
