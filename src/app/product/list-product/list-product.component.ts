import { Component } from '@angular/core';
import { ProductService } from 'src/app/Core/services/product.service';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  listProduct!:Product[];
  count=0;
  constructor(private productService:ProductService) {
  }
  ngOnInit(){
    this.productService.getAllProducts().subscribe((data:Product[])=>this.listProduct=data);
  }
  getNbProductsByLibelle(libelle:string){
    // Utilisez la méthode getAllProducts pour récupérer les données
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.count = data.filter((product: Product) => product.libelle === libelle).length;
      alert("count:"+this.count);
    });
  }
}
