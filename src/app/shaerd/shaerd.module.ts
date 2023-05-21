import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HaederComponent } from './components/haeder/haeder.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SpinerComponent } from './components/spiner/spiner.component';
import { SelectComponent } from './components/select/select.component';
import { FormControl, FormsModule } from '@angular/forms';
import { BodyComponent } from './components/body/body.component';



@NgModule({
  declarations: [
    HaederComponent,
    FooterComponent,
    SpinerComponent,
    SelectComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    HaederComponent,
    FooterComponent,
    SpinerComponent,
    BodyComponent,
    SelectComponent,
    FormsModule

  ]
})
export class ShaerdModule { }
