import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:any []=[] ;
  total:any = 0
  lenghtOfCArt :number =0
  constructor(private service :CartService){}


  ngOnInit(): void {
    this.getCart()
    this.lenghtOfCArt=this.cart.length
  }

  getCart(){
    if("cart" in localStorage){
      this.cart = JSON.parse(localStorage.getItem("cart")!);
      this.totalPrice()
      this.lenghtOfCArt=this.cart.length

    }
  }

  addAmount(index :number){
    this.cart[index].quantity++
    this.totalPrice()
    localStorage.setItem("cart",JSON.stringify(this.cart))
    this.lenghtOfCArt=this.cart.length
  }

  minsAmount(index :number){
    if(this.cart[index].quantity != 0){
      this.cart[index].quantity--
    this.totalPrice()
    localStorage.setItem("cart",JSON.stringify(this.cart))
    }
    this.lenghtOfCArt=this.cart.length
  }

  change(){
    localStorage.setItem("cart",JSON.stringify(this.cart))
    this.totalPrice()
  }

  deleteProduct(index: number){
    if(confirm("Are you sure you want to delete product")){
      this.cart.splice(index, 1)
      localStorage.setItem("cart",JSON.stringify(this.cart))
      this.totalPrice()
      this.lenghtOfCArt=this.cart.length
    }

  }

  clear(){
    if (confirm("Are you sure you want to clear your cart?")){
      this.cart=[]
      this.totalPrice()
      localStorage.setItem("cart",JSON.stringify(this.cart))
    }

  }

  totalPrice(){
    this.total= 0
    for( let x in this.cart){
      this.total += this.cart[x].pro.price * this.cart[x].quantity
    }
    this.lenghtOfCArt=this.cart.length
  }

  addCart(){
    let products = this.cart.map(item => {
      return { productId: item.pro.id , quantity: item.quantity}
    })

    let Model = {
      userId:5,
      date:new Date(),
      products: products
    }

    this.service.sendCart(Model).subscribe(res=>{
      alert("done sending")
    })
  }


}
