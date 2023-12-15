import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { CategorieComponent } from './categorie.component';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [
    CategorieComponent
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    AppModule
  ]
})
export class CategorieModule { }
