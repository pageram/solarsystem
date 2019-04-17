import { NgModule } from '@angular/core';

import { EarthComponent } from './components/earth.component';

import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module'

@NgModule({
  declarations: [
    EarthComponent
  ],
  exports: [
    EarthComponent
  ],
  imports: [
    MaterialModule,
    CoreModule
  ]
})
export class EarthModule { }
