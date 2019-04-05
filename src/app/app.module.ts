import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './core/material/material.module'
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { PlanetsModule } from './planets.module';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    PlanetsModule,
    MaterialModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
