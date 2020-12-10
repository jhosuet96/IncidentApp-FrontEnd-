import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { puesto } from '../model/puesto';
import { ServiceAppService } from '../Service/service-app.service';

@Component({
  selector: 'app-puestos',
  templateUrl: './puestos.component.html',
  styleUrls: ['./puestos.component.scss']
})
export class PuestosComponent implements OnInit  {
  data:any;
  puestos:puesto[]=[];
  _pestos:puesto;
  modificadoPor: number =1;

  constructor(private service: ServiceAppService<puesto>,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.getAllP();   
  }

  getAllP(){
    this.service.getAll("Puesto","GetAllP").subscribe((data: puesto[])=>{
      this.puestos = data;
      console.log(this.puestos);
    });
  }

  getByid(id: number){
    this.service.getByID("Puesto","GetById",id).subscribe((data:any)=>{
      this.data = data;
     // console.log("Hay Registros " + this.data.employee);
    },err => {
      console.log("Error: " + err)
    });
  }

  openLgPue(contentDep, id: number){
    debugger
    this.modalService.open(contentDep, { size: 'md' });
    this.getByid(id);
  }

  editPuesto(form: NgForm){
    debugger
   
    this.service.Update("Puesto","UpdatePuesto",form.value).subscribe((data:any)=>{
      this.data = data;
      console.log(this.data.status);
      console.log(this.data.empleado);

      if(this.data.status){
        alert("Error al editar registro");
        this.getAllP();
      }else{
        alert("Registro Editado");
        this.modalService.dismissAll();
        this.getAllP();
      }
    });
  }

  delete(data:any,iduser:number){   
    debugger   
    if(confirm("Desea Eliminar este Departamento.!")){     
      data.ModificadoPor = iduser;
      this.service.Delete("Puesto","DeletePuesto",data).subscribe(res=>{         
        alert("La accion se ejecuto con EXITO.!");
        this.getAllP();
      });
    }    
  }
}
