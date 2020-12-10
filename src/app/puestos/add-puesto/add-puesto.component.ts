import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { puesto } from 'src/app/model/puesto';
import { ServiceAppService } from 'src/app/Service/service-app.service';

@Component({
  selector: 'app-add-puesto',
  templateUrl: './add-puesto.component.html',
  styleUrls: ['./add-puesto.component.scss']
})
export class AddPuestoComponent implements OnInit {
  _puestos : puesto;
 creadoPor:number = 1;
   @Input() objEmp : puesto = new puesto();
  constructor(private service: ServiceAppService<puesto>) { }

  ngOnInit() {
  }  
  
  addPue(form: NgForm){
    debugger
    if(confirm("Deseas agregar el registro?")){
      this._puestos = new puesto();
      this._puestos.Nombre = form.value.nombre;
      this._puestos.Estatus = form.value.estatus;
      this._puestos.Borrado = form.value.borrado;
      this._puestos.FechaRegistro = form.value.fechaRegistro;
      this._puestos.FechaModificacion = form.value.fechaModificacion;
      this._puestos.CreadoPor = this.creadoPor;
      this._puestos.ModificadoPor = form.value.modificadoPor;
      this.service.Create("Puesto","AddPuesto",this._puestos).subscribe(res=>{
        console.log(res);
        alert("Puesto Agregado");
        form.resetForm(form);
      },err=>{
        console.log(err);
      });
    }else{
      alert("Cancelado")
    }
  }
}
