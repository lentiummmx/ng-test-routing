import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../../components/inicio/inicio.component';

const routes: Routes = [
	{ path: '', component: InicioComponent }
];

export const routeableComponents = [
	InicioComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class InicioRoutingModule { }
