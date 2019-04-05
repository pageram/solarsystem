import { NgModule } from '@angular/core';

import { EarthComponent } from './components/earth.component';
import { MaterialModule } from '.././core/material/material.module'

@NgModule({
  declarations: [
    EarthComponent
  ],
  exports: [
    EarthComponent
  ],
  imports: [
    MaterialModule
  ]
})
export class EarthModule { }
