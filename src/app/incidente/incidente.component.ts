import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { incidente } from '../model/incidente';
import { ServiceAppService } from '../Service/service-app.service';

@Component({
  selector: 'app-incidente',
  templateUrl: './incidente.component.html',
  styleUrls: ['./incidente.component.scss']
})
export class IncidenteComponent implements OnInit {
  data: any;
  usuario: any;
  prioridad: any;
  departamento: any;
  incidentes :incidente[]=[];
 modificadoPor: number =1;
  constructor(
    private service: ServiceAppService<incidente>,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.getAllIn();
  }

  getAllIn(){
    this.service.getAll("Incidente","GetAllIn").subscribe((data: incidente[])=>{
      this.incidentes = data;
      console.log(this.incidentes);
    });
  }

  getByid(id: number){
    this.service.getByID("Incidente","GetById",id).subscribe((data:any)=>{
      this.data = data;
     // console.log("Hay Registros " + this.data.employee);
    },err => {
      console.log("Error: " + err)
    });
  }

  openLgDep(contentIn, id: number){
    debugger
    this.modalService.open(contentIn, { size: 'lg' });
    this.getByid(id);
  }

  editIncidente(form: NgForm){
    debugger
   
    this.service.Update("Incidente","UpdateIncidente",form.value).subscribe((data:any)=>{
      this.data = data;

      if(this.data.status){
        alert("Error al editar registro");
        this.getAllIn();
      }else{
        alert("Registro Editado");
        this.modalService.dismissAll();
        this.getAllIn();
      }
    });
  }


  delete(data:any,iduser:number){   
    debugger   
    if(confirm("Desea Eliminar este Incidente.!")){     
      data.ModificadoPor = iduser;
      this.service.Delete("Incidente","DeleteIncidente",data).subscribe(res=>{         
        alert("La accion se ejecuto con EXITO.!");
        this.getAllIn();
      });
    }
    
  }

  
  GetAllUsuario(){
    this.service.getAll("Usuario","GetAllU").subscribe((data:any[])=>{
      this.usuario = data;
    });
  }
  GetAllPrioridad(){
    this.service.getAll("Prioridad","GetAllPr").subscribe((data:any[])=>{
      this.prioridad = data;
    });
  }
  GetAllDepartamento(){
    this.service.getAll("Departamento","GetAllD").subscribe((data:any[])=>{
      this.departamento = data;
    });
  }
}
