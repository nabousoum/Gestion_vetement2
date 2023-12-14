import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetementsRoutingModule } from './vetements-routing.module';
import { VetementsComponent } from './vetements.component';


@NgModule({
  declarations: [
    VetementsComponent
  ],
  imports: [
    CommonModule,
    VetementsRoutingModule
  ]
})
export class VetementsModule { }
