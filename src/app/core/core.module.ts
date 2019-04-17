import { NgModule } from '@angular/core';

import { SolarSystemObjectComponent } from '../core/components/object/object.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    SolarSystemObjectComponent
  ],
  exports: [
    SolarSystemObjectComponent
  ],
  imports: [
    MaterialModule
  ]
})
export class CoreModule { }