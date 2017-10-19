import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule, routeableComponents } from './inicio-routing.module';

@NgModule({
  imports: [
    CommonModule,
    InicioRoutingModule
  ],
  declarations: [
  	routeableComponents
  ]
})
export class InicioModule { }
