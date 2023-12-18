import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetementsRoutingModule } from './vetements-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { FormVetementComponent } from './form-vetement/form-vetement.component';
import { VetementComponent } from './vetements.component';



@NgModule({
    declarations: [
        VetementComponent,
        FormVetementComponent
    ],
    exports: [
        VetementComponent
    ],
    imports: [
        CommonModule,
        VetementsRoutingModule,
        LayoutModule
    ]
})
export class VetementsModule { }
