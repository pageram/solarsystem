import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './components/home.component';
import { MaterialModule } from '../material/material.module';

import { CarouselComponent, CarouselItemElement } from '../core/components/carousel/carousel.component';
import { CarouselItemDirective } from '../core/directives/carousel-item.directive';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    CarouselItemElement,
    CarouselItemDirective
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class HomeModule { }
