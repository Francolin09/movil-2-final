import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndicadorService {

  url :string = 'https://mindicador.cl/api';

  constructor(private http: HttpClient) { }

  obtenerindicador(): Promise<any>{
    return new Promise((resolve,reject)=>{
      this.http.get(this.url).subscribe(respuesta =>{
        resolve(respuesta);
      }, (error)=>{
        reject(error);
      })
    })
  }
}
