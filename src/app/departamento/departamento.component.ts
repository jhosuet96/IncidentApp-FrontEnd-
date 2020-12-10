import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { departamento } from '../model/departamento';
import { ServiceAppService } from '../Service/service-app.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss']
})
export class DepartamentoComponent implements OnInit {
  data: any;
  departamentos:departamento[]=[];
  _departamentos : departamento;
 modificadoPor: number =1;
  constructor(
    private service: ServiceAppService<departamento>,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.getAllD();
  }

  getAllD(){
    this.service.getAll("Departamento","GetAllD").subscribe((data: departamento[])=>{
      this.departamentos = data;
      console.log(this.departamentos);
    });
  }

  getByid(id: number){
    this.service.getByID("Departamento","GetById",id).subscribe((data:any)=>{
      this.data = data;
     // console.log("Hay Registros " + this.data.employee);
    },err => {
      console.log("Error: " + err)
    });
  }

  openLgDep(contentDep, id: number){
    debugger
    this.modalService.open(contentDep, { size: 'md' });
    this.getByid(id);
  }

  editDepatamento(form: NgForm){
    debugger
   
    this.service.Update("Departamento","UpdateDepartamento",form.value).subscribe((data:any)=>{
      this.data = data;

      if(this.data.status){
        alert("Error al editar registro");
        this.getAllD();
      }else{
        alert("Registro Editado");
        this.modalService.dismissAll();
        this.getAllD();
      }
    });
  }


  delete(data:any,iduser:number){   
    debugger   
    if(confirm("Desea Eliminar este Departamento.!")){     
      data.ModificadoPor = iduser;
      this.service.Delete("Departamento","DeleteDepartmento",data).subscribe(res=>{         
        alert("La accion se ejecuto con EXITO.!");
        this.getAllD();
      });
    }
    
  }
}
