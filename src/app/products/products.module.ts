import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoductesComponent } from './components/all-poductes/poductes.component';
import { PoductesDetilesComponent } from './components/poductes-detiles/poductes-detiles.component';
import { HttpClientModule } from '@angular/common/http';
import { ShaerdModule } from "../shaerd/shaerd.module";
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        PoductesComponent,
        PoductesDetilesComponent,
        ProductComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ShaerdModule,
        RouterModule
    ]
})
export class ProductsModule { }
