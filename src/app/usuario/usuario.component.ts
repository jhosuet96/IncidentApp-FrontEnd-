import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { usuario } from '../model/usuario';
import { ServiceAppService } from '../Service/service-app.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuarios:usuario[]=[];
  data: any;
  modificadoPor: number =1;

 
   constructor(
     private service: ServiceAppService<usuario>,
     private modalService: NgbModal
 
   ) {}
   


   ngOnInit() {
     this.getAllU();
   }
 
   getAllU(){
     this.service.getAll("Usuario","GetAllU").subscribe((data: usuario[])=>{
       this.usuarios = data;
       console.log(this.usuarios);
     });
   }

 
   editUsuario(form: NgForm){
     debugger
     this.service.Update("Usuario","UpdateUsuario",form.value).subscribe((data:any)=>{
       this.data = data;
     });
     this.modalService.dismissAll();
     this.getAllU(); 
   }
 
   getByid(id: number){
     this.service.getByID("Usuario","GetById",id).subscribe((data:any)=>{
       this.data = data;
      // console.log("Hay Registros " + this.data.employee);
     },err => {
       console.log("Error: " + err)
     });
   }
 
   openLgUs(contentUs, id: number){
     debugger
     this.modalService.open(contentUs, { size: 'lg' });
     this.getByid(id);
   }

   delete(data:any,iduser:number){   
    debugger   
    if(confirm("Desea Eliminar este Usuario.!")){     
      data.ModificadoPor = iduser;
      this.service.Delete("Usuario","DeleteUsuario",data).subscribe(res=>{         
        alert("La accion se ejecuto con EXITO.!");
        this.getAllU();
      });
    }    
  }

 }
 