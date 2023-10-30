import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  id!:number;
constructor(private actR:ActivatedRoute){

}
ngOnInit(): void {
  this.getParam()
}
  getParam(){
    //1eremeth
    //this.id=Number(this.actR.snapshot.paramMap.get('param'));
    ///differnce entre snapshot et param map d2fct pour recuperer l'id  snapshot matekhdem ela fl appel mtaa 
    //param map dynamique kol ma nbadel id yetbadel fl url
    //2eme meth
    this.actR.paramMap.subscribe(data =>this.id=Number(data.get('param')));
  }
}
