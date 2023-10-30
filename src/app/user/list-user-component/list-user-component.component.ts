import { Component } from '@angular/core';
import { User } from '../../Models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Core/services/user.service';

@Component({
  selector: 'app-list-user-component',
  templateUrl: './list-user-component.component.html',
  styleUrls: ['./list-user-component.component.css']
})
export class ListUserComponentComponent {
  searchItem!: string;
  list:User[]=[];
  /*deleteUser(user: User): void {
    if (confirm('Vous etes sur vous voulez supprimer ce user?')) {
      const index = this.list.indexOf(user);

      if (index !== -1) {
        this.list.splice(index, 1);
      }
    }
  }*/
  deleteUser(id: string){
    this.users.deleteUser(id).subscribe(()=>alert('id deleted'));

  }

  var1 = "submit";
  constructor(private Router:Router,private users:UserService){}
  ngOnInit(){
    //this.list=this.users.getAllUsers();//de type observable donc il faut la corriger ->
    //this.users.getAllUsers().subscribe((data:User[])=>this.list=data);
    
    this.users.getAllUsers().subscribe((data: any) => {
      this.list = data as User[]; // Assurez-vous que les données sont correctement typées comme un tableau d'utilisateurs (User[])
    },
    (error) => {
      console.error('Une erreur s\'est produite lors de la récupération des utilisateurs :', error);
    });
  }

 add(){
  this.Router.navigate(["adduser"]);
 }

}
