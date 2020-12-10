import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { incidente } from 'src/app/model/incidente';
import { ServiceAppService } from 'src/app/Service/service-app.service';

@Component({
  selector: 'app-add-incidente',
  templateUrl: './add-incidente.component.html',
  styleUrls: ['./add-incidente.component.scss']
})
export class AddIncidenteComponent implements OnInit {
  @Input() objInc : incidente = new incidente();
  incidentes : incidente;
  
  usuario: any;
  prioridad: any;
  departamento: any;
  
 creadoPor:number = 1;

  constructor(private service: ServiceAppService<incidente>) { }

  ngOnInit() {
    this.fillDropDownListUsuario();
    this.fillDropDownListDepartamento();
    this.fillDropDownListPrioridad();
  }

  addIncidente(form: NgForm){
    debugger;
    var confirmar = confirm("Desea guardar el registro?");
    if(confirmar){
      this.incidentes = new incidente();
      this.incidentes.UsuarioAsignadoId = form.value.usuarioReportaId;
      this.incidentes.UsuarioAsignadoId = form.value.usuarioAsignadoId;
      this.incidentes.PrioridadId = form.value.prioridadId;
      this.incidentes.DepartamentoId = form.value.departamentoId;
      this.incidentes.Titulo = form.value.titulo;
      this.incidentes.Descripcion = form.value.descripcion;
      this.incidentes.FechaCierre = form.value.fechaCierre;
      this.incidentes.CoemntarioCierrre = form.value.coemntarioCierrre;
      this.incidentes.Estatus = "A";
      this.incidentes.Borrado = false;
      this.incidentes.FechaRegistro = form.value.fechaRegistro;
      this.incidentes.FechaModificacion = form.value.fechaModificacion; 
      this.incidentes.CreadoPor = this.creadoPor;     
      this.service.Create("Incidente","AddIncidente", this.incidentes).subscribe((res:any)=>{
        this.incidentes = res.incidentes;
        alert("Registro guardado exitosamente!"); 
        form.reset();
      }); 
    }
    else { alert("Cancelado"); }
  }


  fillDropDownListUsuario(){
    this.service.getAll("Incidente","FillDropDownUsuario").subscribe((data:any[])=>{
      this.usuario = data;
    });
  }
  fillDropDownListPrioridad(){
    this.service.getAll("Incidente","FillDropDownPrioridad").subscribe((data:any[])=>{
      this.prioridad = data;
    });
  }
  fillDropDownListDepartamento(){
    this.service.getAll("Incidente","FillDropDownDepartamento").subscribe((data:any[])=>{
      this.departamento = data;
    });
  }

}
