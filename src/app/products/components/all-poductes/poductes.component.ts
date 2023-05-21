import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products';

@Component({
  selector: 'app-poductes',
  templateUrl: './poductes.component.html',
  styleUrls: ['./poductes.component.css']
})
export class PoductesComponent implements OnInit {

  products : Product [] =[]
  catigroes : string[] = []
  cart :any[] = []
  looding :boolean = false
  constructor(private servcies : ProductsService){}

  ngOnInit(): void {
    this.getProducts()
    this.getCatigores()

  }

  getProducts(){
    this.looding=true;
    this.servcies.getAllProducts().subscribe((res:any )=>{
    this.products = res
    console.log(res)});
    this.looding=false;
  }

  getCatigores(){
    this.looding=true;
    this.servcies.getAllCatigores().subscribe((res :any )=>{
      this.catigroes=res
      this.looding=false;
    })
  }

  fliterCatigores(event : any) {
    let value = event.target.value;
    (value == "all")?this.getProducts() : this.getProductesByCatigroes(value)
  }

  getProductesByCatigroes(keyword : string){
    this.looding=true;
    this.servcies.getProductByCatigores(keyword).subscribe((res:any) =>{
      this.looding=false;
      this.products = res;
    })
  }

  addToCart(event:any) {
    if("cart" in localStorage){
      this.cart = JSON.parse(localStorage.getItem("cart")!);
      let ex = this.cart.find(itme=>itme.pro.id === event.pro.id)
      if(ex){
        alert("this product has already been added")
      }else{
        this.cart.push(event);
        localStorage.setItem("cart",JSON.stringify(this.cart))
      }
    }else{
      this.cart.push(event);
      localStorage.setItem("cart",JSON.stringify(this.cart))
    }
  }


}
