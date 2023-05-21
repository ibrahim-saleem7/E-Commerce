import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() data!:Product
  @Output() itme = new EventEmitter();
  addbtn:boolean = false;
  amount : number = 1;

  btnChange(){
    this.addbtn=true;
  }

  add(){
    this.itme.emit({pro:this.data, quantity:this.amount});
    this.addbtn=false;

  }


}
