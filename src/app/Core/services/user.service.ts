import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/user';

@Injectable({
  providedIn: 'root'
})
//@Injectable() ///si j'ai ajouter userservice au niveau de appmodule
export class UserService {
  list: User[] = []
  constructor(private http:HttpClient) { }
  /*getAllUsers(){
    return this.list;
  };*/
  url="http://localhost:3000/users"
  httpOptions={
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  };
  getAllUsers(){
    return this.http.get<User[]>(this.url);
  };
  getUserById(id:string){

  };
  addUser(u:User){
    return this.http.post<User>(this.url,u,this.httpOptions)
  };
  updateUser(id:string,u:User){};
  
  deleteUser(id:string){
    let url2=this.url+"/"+id;
    return this.http.delete<User>(url2);
  };
}
