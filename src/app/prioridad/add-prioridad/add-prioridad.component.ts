import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { prioridad } from 'src/app/model/prioridad';
import { ServiceAppService } from 'src/app/Service/service-app.service';

@Component({
  selector: 'app-add-prioridad',
  templateUrl: './add-prioridad.component.html',
  styleUrls: ['./add-prioridad.component.scss']
})
export class AddPrioridadComponent implements OnInit {
  _prioridad : prioridad;
 creadoPor:number = 1;
   @Input() objEmp : prioridad = new prioridad();
  constructor(private service: ServiceAppService<prioridad>) { }

  ngOnInit() {
  }  
  
  addPr(form: NgForm){
    debugger
    if(confirm("Deseas agregar el registro?")){
      this._prioridad = new prioridad();
      this._prioridad.Nombre = form.value.nombre;
      this._prioridad.SlaId = form.value.slaId;
      this._prioridad.Estatus = form.value.estatus;
      this._prioridad.Borrado = form.value.borrado;
      this._prioridad.FechaRegistro = form.value.fechaRegistro;
      this._prioridad.FechaModificacion = form.value.fechaModificacion;
      this._prioridad.CreadoPor = this.creadoPor;
      this._prioridad.ModificadoPor = form.value.modificadoPor;
      this.service.Create("Prioridad","AddPrioridad",this._prioridad).subscribe(res=>{
        console.log(res);
        alert("Prioridad Agregada");
        form.resetForm(form);
      },err=>{
        console.log(err);
      });
    }else{
      alert("Cancelado")
    }
  }
}
