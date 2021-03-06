import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Rutas
import { CATALOGOS_ROUTES } from './catalogo.routes';

// Modulos
// import { SharedModule } from '../shared/shared.module';

// Componentes
import { CatalogosComponent } from './catalogos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProcesosComponent } from './procesos/procesos.component';
import { ProcesosFormularioComponent } from './procesos/procesos-formulario.component';
import { AreasComponent } from './areas/areas.component';
import { PuestosComponent } from './puestos/puestos.component';
import { PeriodosComponent } from './periodos/periodos.component';

import { TipoIndicadoresComponent } from './tipo-indicadores/tipo-indicadores.component';
import { ObjetivosCalidadComponent } from './objetivos-calidad/objetivos-calidad.component';
import { ProcesosTreeComponent } from '../components/procesos-tree/procesos-tree.component';
import { TreeModule } from 'angular-tree-component';



@NgModule({
	declarations: [
		CatalogosComponent,
		UsuariosComponent,
		ProcesosComponent,
		ProcesosFormularioComponent,
		ProcesosTreeComponent
	],
	exports: [
		CatalogosComponent
	],
	imports: [
		CommonModule,
		CATALOGOS_ROUTES,
		FormsModule,
		ReactiveFormsModule,
		TreeModule.forRoot()
	]
})
export class CatalogosModule { }
