import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { sla } from 'src/app/model/sla';
import { ServiceAppService } from 'src/app/Service/service-app.service';

@Component({
  selector: 'app-add-sla',
  templateUrl: './add-sla.component.html',
  styleUrls: ['./add-sla.component.scss']
})
export class AddSlaComponent implements OnInit  {
  _sla:sla;
 creadoPor:number = 1;
   @Input() objEmp : sla = new sla();
  constructor(private service: ServiceAppService<sla>) { }

  ngOnInit() {
  }  
  
  addSla(form: NgForm){
    debugger
    if(confirm("Deseas agregar el registro?")){
      this._sla = new sla();
      this._sla.Descripcion = form.value.descripcion;
      this._sla.CantdadHoras = form.value.cantdadHoras;
      this._sla.Estatus = form.value.estatus;
      this._sla.Borrado = form.value.borrado;
      this._sla.FechaRegistro = form.value.fechaRegistro;
      this._sla.FechaModificacion = form.value.fechaModificacion;
      this._sla.CreadoPor = this.creadoPor;
      this._sla.ModificadoPor = form.value.modificadoPor;
      this.service.Create("Sla","AddSla",this._sla).subscribe(res=>{
        console.log(res);
        alert("Sla Agregado");
        form.resetForm(form);
      },err=>{
        console.log(err);
      });
    }else{
      alert("Cancelado")
    }
  }
}
