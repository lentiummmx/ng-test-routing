import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../../components/admin/admin.component';
import { AdminNuevoComponent } from '../../components/admin-nuevo/admin-nuevo.component';
import { AdminMostrarComponent } from '../../components/admin-mostrar/admin-mostrar.component';

const routes: Routes = [
	{
		path: 'admin', component: AdminComponent, children: [
			{ path: 'nuevo', component: AdminNuevoComponent },
			{ path: 'modificar/:id', component: AdminNuevoComponent },
			{ path: 'mostrar', component: AdminMostrarComponent }
		]
	}
];

export const enruteableComponent = [
	AdminComponent, AdminNuevoComponent, AdminMostrarComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AdminRoutingModule { }
