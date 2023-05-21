import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { PoductesDetilesComponent } from './products/components/poductes-detiles/poductes-detiles.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { PoductesComponent } from './products/components/all-poductes/poductes.component';

const routes: Routes = [
  {path: '', redirectTo : 'products', pathMatch : 'full'},
  {path: 'products', component:PoductesComponent},
  {path: "detiles/:id", component:PoductesDetilesComponent},
  {path: 'cart', component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
