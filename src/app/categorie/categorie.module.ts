import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { CategorieComponent } from './categorie.component';
import { AppModule } from '../app.module';
import { FormCategorieComponent } from './form-categorie/form-categorie.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategorieComponent,
    FormCategorieComponent

  ],
  exports:[
    CategorieComponent
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    FormsModule
  ]
})
export class CategorieModule { }
