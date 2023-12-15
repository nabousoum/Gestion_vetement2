import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetementsRoutingModule } from './vetements-routing.module';
import { VetementsComponent } from './vetements.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
    declarations: [
        VetementsComponent
    ],
    exports: [
        VetementsComponent
    ],
    imports: [
        CommonModule,
        VetementsRoutingModule,
        LayoutModule
    ]
})
export class VetementsModule { }
