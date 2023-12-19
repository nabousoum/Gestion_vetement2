import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./securite/securite.module').then(m => m.SecuriteModule) },
  { path: 'admin', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: "category",
        loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule)
      },
    ]  
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
