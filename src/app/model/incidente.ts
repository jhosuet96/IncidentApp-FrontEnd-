export class incidente{
 
    IncidenteId: number;
    UsuarioReportaId:number;
    UsuarioAsignadoId:number;
    PrioridadId:number;
    DepartamentoId:number;
    Titulo :String;
    Descripcion :String;   
    FechaCierre :any;
    CoemntarioCierrre :String; 
     Estatus :String;
     Borrado :boolean;
     FechaRegistro :any;
     FechaModificacion: any;
     CreadoPor :number;
     ModificadoPor :number;
}