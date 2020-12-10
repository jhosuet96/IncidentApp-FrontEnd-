import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

    @Injectable({
    providedIn: 'root'
    })

export class ServiceAppService<T> {
    private endPoint : string = environment.endPoint; //"https://localhost:44368/api/";
    httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    constructor(private httpClient: HttpClient) { } 

    getAll(controller:String, method:String):Observable<T[]>{
        return this.httpClient.get(this.endPoint + controller + "/" + method) as Observable<T[]>;
    }
    
    getByID(controller:string, method: string, id: number):Observable<T>{
        return this.httpClient.get(this.endPoint + controller + "/" + method + "/" + id)
        .pipe(
          catchError(this.errorHandler)
        ) as Observable<T>;
    } 
    
    Create(controller: string, method : string, obj: object):Observable<T>{
        return this.httpClient.post(this.endPoint + controller + "/" + method , JSON.stringify(obj),this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        ) as Observable<T>;
    }
    
    Update( controller:string, method:String, obj:any):Observable<T>{
        return this.httpClient.patch(this.endPoint + controller + "/"+ method, JSON.stringify(obj), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        ) as Observable<T>;
    }
    
    Delete(controller:string, method:string, obj:any):Observable<T>{
        return this.httpClient.patch(this.endPoint + controller + "/" + method , JSON.stringify(obj), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        ) as Observable<T>;
    } 
    
    errorHandler(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}