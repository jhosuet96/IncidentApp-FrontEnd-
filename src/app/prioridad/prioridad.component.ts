import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { prioridad } from '../model/prioridad';
import { ServiceAppService } from '../Service/service-app.service';

@Component({
  selector: 'app-prioridad',
  templateUrl: './prioridad.component.html',
  styleUrls: ['./prioridad.component.scss']
})
export class PrioridadComponent implements OnInit {
  data:any;
  prioridades:prioridad[]=[];
  _prioridades:prioridad;
  modificadoPor: number =1;

  constructor(private service: ServiceAppService<prioridad>,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.getAllPr();   
  }

  getAllPr(){
    this.service.getAll("Prioridad","GetAllPr").subscribe((data: prioridad[])=>{
      this.prioridades = data;
      console.log(this.prioridades);
    });
  }

  getByid(id: number){
    this.service.getByID("Prioridad","GetById",id).subscribe((data:any)=>{
      this.data = data;
     // console.log("Hay Registros " + this.data.employee);
    },err => {
      console.log("Error: " + err)
    });
  }

  openLgPr(contentPr, id: number){
    this.modalService.open(contentPr, { size: 'md' });
    this.getByid(id);
  }

  editPrioridad(form: NgForm){
    debugger   
    this.service.Update("Prioridad","UpdatePrioridad",form.value).subscribe((data:any)=>{
      this.data = data;
      //this.getAllPr(); 
    });
    this.modalService.dismissAll();
    this.getAllPr(); 
  }

  delete(data:any,iduser:number){   
    debugger   
    if(confirm("Desea Eliminar esta Prioridad.!")){     
      data.ModificadoPor = iduser;
      this.service.Delete("Prioridad","DeletePrioridad",data).subscribe(res=>{         
        alert("La accion se ejecuto con EXITO.!");
        this.getAllPr();
      });
    }    
  }
}

