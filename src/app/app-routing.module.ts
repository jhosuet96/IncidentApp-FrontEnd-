import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { PuestosComponent } from './puestos/puestos.component';
import { AddDepartamentoComponent } from './departamento/add-departamento/add-departamento.component';
import { AddPuestoComponent } from './puestos/add-puesto/add-puesto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AddUsuarioComponent } from './usuario/add-usuario/add-usuario.component';
import { SlaComponent } from './sla/sla.component';
import { AddSlaComponent } from './sla/add-sla/add-sla.component';
import { PrioridadComponent } from './prioridad/prioridad.component';
import { AddPrioridadComponent } from './prioridad/add-prioridad/add-prioridad.component';
import { IncidenteComponent } from './incidente/incidente.component';
import { AddIncidenteComponent } from './incidente/add-incidente/add-incidente.component';

const routes: Routes = [
  { path: '', redirectTo: '/usuario', pathMatch: 'full' },
 // { path: 'tables', component: TablesComponent },
 // { path: 'icons', component: IconsComponent },
  { path: 'departamento', component: DepartamentoComponent },
  { path: 'add-departamento', component: AddDepartamentoComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'add-usuario', component: AddUsuarioComponent },
  { path: 'sla', component: SlaComponent },
  { path: 'add-sla', component: AddSlaComponent },
  { path: 'puestos', component: PuestosComponent },
  { path: 'add-puesto', component: AddPuestoComponent },
  { path: 'prioridad', component: PrioridadComponent },
  { path: 'add-prioridad', component: AddPrioridadComponent },
  { path: 'incidente', component: IncidenteComponent },
  { path: 'add-incidente', component: AddIncidenteComponent },

 // { path: 'dropdowns', component: DropdownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
