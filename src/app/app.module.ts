import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module'
import { LayoutModule } from '@angular/cdk/layout';
import { ObjectModule } from './object.module';

import { AppComponent } from './core/components/main/app.component';
import { MyNavComponent } from './core/components/my-nav/my-nav.component';


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
    MaterialModule,
    ObjectModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
