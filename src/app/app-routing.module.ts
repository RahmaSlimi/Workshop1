import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListUserComponentComponent } from './user/list-user-component/list-user-component.component';
import { AddNewUserComponent } from './user/add-new-user/add-new-user.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { MainInvoiceComponentComponent } from './main-invoice-component/main-invoice-component.component';
import { InvoiceComponentComponent } from './invoice-component/invoice-component.component';
import { InvoiceListComponentComponent } from './invoice-list-component/invoice-list-component.component';

const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},//la premiere page
    {path:"home", component:HomeComponent},
    //{path:"users",component:ListUserComponentComponent,children:[{path:"addUser", component:AddNewUserComponent}]},
    {path: 'users', loadChildren: ()=>import('./user/user.module').then(m=>m.UserModule)},
    
    {path: 'products', loadChildren: ()=>import('./product/product.module').then(m=>m.ProductModule)},
    {path: 'provider', loadChildren: ()=>import('./provider/provider.module').then(m=>m.ProviderModule)},
    
    {path:"InvoiceManagement",component:InvoiceListComponentComponent},
    {path:"invoice/:id/:active", component: InvoiceComponentComponent},
    //8eme question 
    {path:"invoice", component: InvoiceComponentComponent},
    //{path:"editUser/:param",component:UpdateUserComponent},
    {path:"**", component:ErrorPageComponent}//l'ordre est important car il fait if else if else if
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
