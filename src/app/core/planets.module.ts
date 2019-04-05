import { NgModule } from '@angular/core';

import { SunModule } from '../sun/sun.module';
import { MarsModule } from '../mars/mars.module';
import { EarthModule } from '../earth/earth.module';
import { HomeModule } from '../home/home.module';

@NgModule({
  exports: [
    EarthModule,
    HomeModule,
    MarsModule,
    SunModule
  ]
})
export class PlanetsModule { }