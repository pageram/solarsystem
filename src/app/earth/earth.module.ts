import { NgModule } from '@angular/core';

import { EarthComponent } from './components/earth.component';
import { MaterialModule } from '../material/material.module'

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
