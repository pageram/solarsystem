import { NgModule } from '@angular/core';

import { MarsComponent } from './components/mars.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    MarsComponent
  ],
  exports: [
    MarsComponent
  ],
  imports: [
    MaterialModule
  ]
})
export class MarsModule { }
