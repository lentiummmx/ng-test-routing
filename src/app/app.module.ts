import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, enruteableComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioModule } from './modules/inicio/inicio.module';
import { AdminModule } from './modules/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    enruteableComponents
  ],
  imports: [
    BrowserModule,
    InicioModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
