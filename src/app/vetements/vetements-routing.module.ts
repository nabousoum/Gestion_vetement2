import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetementsComponent } from './vetements.component';
import { FormVetementComponent } from './form-vetement/form-vetement.component';

const routes: Routes = [
  { path: 'liste',
   component: VetementsComponent,
  },
  { path: 'addVetement',
    component: FormVetementComponent,
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VetementsRoutingModule { }
