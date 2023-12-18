import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuriteRoutingModule } from './securite-routing.module';
import { SecuriteComponent } from './securite.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SecuriteComponent
  ],
  imports: [
    CommonModule,
    SecuriteRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SecuriteModule { }
