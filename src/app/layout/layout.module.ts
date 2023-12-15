import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLayoutComponent } from './menu-layout/menu-layout.component';



@NgModule({
  declarations: [
    MenuLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuLayoutComponent
  ]
})
export class LayoutModule { }