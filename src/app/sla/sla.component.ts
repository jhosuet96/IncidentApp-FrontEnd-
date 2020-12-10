import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { sla } from '../model/sla';
import { ServiceAppService } from '../Service/service-app.service';

@Component({
  selector: 'app-sla',
  templateUrl: './sla.component.html',
  styleUrls: ['./sla.component.scss']
})
export class SlaComponent implements OnInit {
  data:any;
  sla:sla[]=[];
  _sla:sla;
  modificadoPor: number =1;

  constructor(private service: ServiceAppService<sla>,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.getAllS();   
  }

  getAllS(){
    this.service.getAll("Sla","GetAllS").subscribe((data: sla[])=>{
      this.sla = data;
      console.log(this.sla);
    });
  }

  getByid(id: number){
    this.service.getByID("Sla","GetById",id).subscribe((data:any)=>{
      this.data = data;
     // console.log("Hay Registros " + this.data.employee);
    },err => {
      console.log("Error: " + err)
    });
  }

  openLgSla(contentSla, id: number){
    debugger
    this.modalService.open(contentSla, { size: 'md' });
    this.getByid(id);
  }

  editSla(form: NgForm){
    debugger   
    this.service.Update("Sla","UpdateSla",form.value).subscribe((data:any)=>{
      this.data = data;
      if(this.data.status){
        alert("Error al editar registro");
        this.getAllS();
      }else{
        alert("Registro Editado");
        this.modalService.dismissAll();
        this.getAllS();
      }
    });
  }

  delete(data:any,iduser:number){   
    debugger   
    if(confirm("Desea Eliminar este Sla.!")){     
      data.ModificadoPor = iduser;
      this.service.Delete("Sla","DeleteSla",data).subscribe(res=>{         
        alert("La accion se ejecuto con EXITO.!");
        this.getAllS();
      });
    }    
  }
}
