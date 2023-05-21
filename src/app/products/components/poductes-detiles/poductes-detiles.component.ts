import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/shaerd/services/services.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-poductes-detiles',
  templateUrl: './poductes-detiles.component.html',
  styleUrls: ['./poductes-detiles.component.css']
})
export class PoductesDetilesComponent implements OnInit {
  id :any;
  product :any = {}
  looding :boolean = false;
  constructor(private service :ProductsService , private route : ActivatedRoute ){
    this.id=this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }


  ngOnInit(): void {
    this.getProductDetiles()
  }



  getProductDetiles(){
    this.looding=true
    this.service.getProductById(this.id).subscribe(data => {
      this.looding=false
      this.product=data
    })
  }

}
