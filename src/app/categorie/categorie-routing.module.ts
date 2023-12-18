import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './categorie.component';
import { FormCategorieComponent } from './form-categorie/form-categorie.component';

const routes: Routes = [
  { 
    path: 'liste',
    component: CategorieComponent 
  },
  { 
    path: 'addCategorie',
    component: FormCategorieComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
