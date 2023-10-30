import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../Models/Invoice';
import { InvoiceListComponentComponent } from '../invoice-list-component/invoice-list-component.component';

@Component({
  selector: 'app-invoice-component',
  templateUrl: './invoice-component.component.html',
  styleUrls: ['./invoice-component.component.css']
})
export class InvoiceComponentComponent implements OnInit {
  id!: number | undefined;
  active!: boolean | undefined;;
  list!: Invoice[];
  errorMessage!:string;
  constructor(private actR: ActivatedRoute, private invoiceList: InvoiceListComponentComponent,private router: Router) {
    this.list = this.invoiceList.getDataList();
  }
  
  ngOnInit(): void {
    this.getParam()
  }
  /*getParam() {
    this.actR.paramMap.subscribe(data => this.id = Number(data.get('id')));
    this.actR.paramMap.subscribe(data => this.active = Boolean(data.get('active')));
    if (!this.active) {
      this.errorMessage = 'Impossible de visualiser les détails de la facture';
    }
  
  }*/
  getParam() {
    this.actR.queryParams.subscribe(params => {
      this.id = +params['id'] || undefined;
      this.active = params['active'] === 'true';
    if (!this.active) {
        this.errorMessage = 'Impossible de visualiser les détails de la facture';
      }
    });
    
  }

  goBack(): void {
    this.router.navigate(['/InvoiceManagement']);
  }


}
