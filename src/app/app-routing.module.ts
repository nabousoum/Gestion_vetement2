import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'vetements', loadChildren: () => import('./vetements/vetements.module').then(m => m.VetementsModule) },
  { path: 'categorie', loadChildren: () => import('./categorie/categorie.module').then(m => m.CategorieModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', loadChildren: () => import('./securite/securite.module').then(m => m.SecuriteModule) }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
