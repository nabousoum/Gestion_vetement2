import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClotheComponent } from './clothe.component';

const routes: Routes = [{ path: '', component: ClotheComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClotheRoutingModule { }
