import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormVetementComponent } from './form-vetement/form-vetement.component';
import {VetementComponent} from './vetements.component'

const routes: Routes = [
  { 
    path: 'liste',
    component: VetementComponent,
  },
  { 
    path: 'addVetement',
    component: FormVetementComponent,
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VetementsRoutingModule { }
