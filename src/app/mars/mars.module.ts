import { NgModule } from '@angular/core';

import { MarsComponent } from './components/mars.component';

import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    MarsComponent
  ],
  exports: [
    MarsComponent
  ],
  imports: [
    MaterialModule,
    CoreModule
  ]
})
export class MarsModule { }
