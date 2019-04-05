import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home.component';
import { MaterialModule } from '.././core/material/material.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    MaterialModule
  ]
})
export class HomeModule { }
