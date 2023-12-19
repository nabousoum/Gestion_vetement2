import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClotheRoutingModule } from './clothe-routing.module';
import { ClotheComponent } from './clothe.component';
import { ClotheAddComponent } from './clothe-add/clothe-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClotheEditComponent } from './clothe-edit/clothe-edit.component';
import { ClotheDeleteComponent } from './clothe-delete/clothe-delete.component';


@NgModule({
  declarations: [
    ClotheComponent,
    ClotheAddComponent,
    ClotheEditComponent,
    ClotheDeleteComponent
  ],
  imports: [
    CommonModule,
    ClotheRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ClotheModule { }
