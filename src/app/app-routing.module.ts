import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SunComponent } from './sun/components/sun.component';
import { EarthComponent } from './earth/components/earth.component';
import { MarsComponent } from './mars/components/mars.component';
import { HomeComponent } from './home/components/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sun', component: SunComponent },
  { path: 'earth', component: EarthComponent },
  { path: 'mars', component: MarsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
