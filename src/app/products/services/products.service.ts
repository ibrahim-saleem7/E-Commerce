import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  getAllProducts(){
    return this.http.get(environment.baseApi)
  }

  getAllCatigores(){
    return this.http.get(environment.baseApi+'categories/')
  }

  getProductByCatigores(keyword : string){
    return this.http.get(environment.baseApi+'category/'+keyword)
  }

  getProductById(id:any){
    return this.http.get(environment.baseApi+id)
  }
}
