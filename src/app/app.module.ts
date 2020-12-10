import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ServiceAppService } from './Service/service-app.service';
import { HttpClientModule } from '@angular/common/http';
import { PuestosComponent } from './puestos/puestos.component';
import { AddPuestoComponent } from './puestos/add-puesto/add-puesto.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { AddDepartamentoComponent } from './departamento/add-departamento/add-departamento.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AddUsuarioComponent } from './usuario/add-usuario/add-usuario.component';
import { FooterComponent } from './footer/footer.component';
import { SlaComponent } from './sla/sla.component';
import { AddSlaComponent } from './sla/add-sla/add-sla.component';
import { PrioridadComponent } from './prioridad/prioridad.component';
import { AddPrioridadComponent } from './prioridad/add-prioridad/add-prioridad.component';
import { IncidenteComponent } from './incidente/incidente.component';
import { AddIncidenteComponent } from './incidente/add-incidente/add-incidente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    TablesComponent,
    IconsComponent,
    DropdownComponent,
    PuestosComponent,
    AddPuestoComponent,
    DepartamentoComponent,
    AddDepartamentoComponent,
    UsuarioComponent,
    AddUsuarioComponent,
    FooterComponent,
    SlaComponent,
    AddSlaComponent,
    PrioridadComponent,
    AddPrioridadComponent,
    IncidenteComponent,
    AddIncidenteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [ServiceAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }