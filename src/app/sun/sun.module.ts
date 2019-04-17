import { NgModule } from '@angular/core';

import { SunComponent } from './components/sun.component';

import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    SunComponent,
  ],
  exports: [
    SunComponent
  ],
  imports: [
    MaterialModule,
    CoreModule
  ],
  providers: []
})
export class SunModule { }
