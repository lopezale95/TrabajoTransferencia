import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnlacesService {

  private informacion: any;

constructor() { }

  setInformacion(data:any){
    this.informacion=data;
  }

  getInformacion(){
    return this.informacion;
  }

  limpiarInformacion (){
    this.informacion=
  }

}
