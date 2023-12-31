import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';


@NgModule({
  declarations: [
    CategoryComponent,
    CategoryFormComponent,
    CategoryDeleteComponent,
    CategoryUpdateComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ]
})
export class CategoryModule { }
