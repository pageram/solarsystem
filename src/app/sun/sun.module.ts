import { NgModule } from '@angular/core';

import { SunComponent } from './components/sun.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    SunComponent
  ],
  exports: [
    SunComponent
  ],
  imports: [
    MaterialModule
  ],
  providers: []
})
export class SunModule { }
