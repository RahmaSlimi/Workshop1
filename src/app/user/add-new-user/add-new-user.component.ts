import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Core/services/user.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent {
  constructor(private userS: UserService,private r:Router) { }
  user: User = {
    "id": 6,
    "firstName": "Mohamed",
    "lastName": " BenMohemed",
    "birthDate": "1999-06-30",
    "accountCategory": "Admin",
    "email": "mila@kunis.com",
    "password": "test",
    "picture": "https://bootdey.com/img/Content/avatar/avatar3.png",
    "profession": "Software Engineer"

  }
  /*add() {
    this.userS.addUser(this.user).subscribe(
      () => {
        alert('Ajouté avec succès !');
        this.r.navigate(['users']);
      }
    );
  }*/
  /*add(F:NgForm){
    console.log(F.controls['fn'].value);  
  }*/
  add(F:NgForm){
    const id=new Date().getTime();
    const newUser:User={
      id: id,
      firstName: F.value.fn,
      lastName: F.value.ln,
      birthDate: F.value.bd,
      accountCategory: F.value.ct,
      email: F.value.em,
      password: F.value.ps,
      picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
      profession: F.value.pf
    }
    this.userS.addUser(newUser).subscribe(()=>{
      alert("user added");
      this.r.navigate(["users"]);
    });
  }
}
