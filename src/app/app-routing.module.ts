import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'vetements', loadChildren: () => import('./vetements/vetements.module').then(m => m.VetementsModule) },
    
  { path: 'categorie', loadChildren: () => import('./categorie/categorie.module').then(m => m.CategorieModule) },
    
  { path: 'seller', loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule) },
  { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
