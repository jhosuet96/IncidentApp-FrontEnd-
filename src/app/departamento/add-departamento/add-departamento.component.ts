import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { departamento } from 'src/app/model/departamento';
import { ServiceAppService } from 'src/app/Service/service-app.service';

@Component({
  selector: 'app-add-departamento',
  templateUrl: './add-departamento.component.html',
  styleUrls: ['./add-departamento.component.scss']
})
export class AddDepartamentoComponent implements OnInit {

  _departamentos : departamento;
 creadoPor:number = 1;
   @Input() objEmp : departamento = new departamento();
  constructor(private service: ServiceAppService<departamento>) { }

  ngOnInit() {
  }

  
  
  addDep(form: NgForm){
    debugger
    if(confirm("Deseas agregar el registro?")){
      this._departamentos = new departamento();
      this._departamentos.Nombre = form.value.nombre;
      this._departamentos.DepartamentoId = form.value.departamentoId;
      this._departamentos.Estatus = form.value.estatus;
      this._departamentos.Borrado = form.value.borrado;
      this._departamentos.FechaRegistro = form.value.fechaRegistro;
      this._departamentos.FechaModificacion = form.value.fechaModificacion;
      this._departamentos.CreadoPor = this.creadoPor;
      this._departamentos.ModificadoPor = form.value.modificadoPor;
      this.service.Create("Departamento","AddDepartamento",this._departamentos).subscribe(res=>{
        console.log(res);
        alert("Departamento Agregado");
        form.resetForm(form);
      },err=>{
        console.log(err);
      });
    }else{
      alert("Cancelado")
    }
  }

}
