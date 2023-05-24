import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-busca_Felicidad',
  templateUrl: './busca_Felicidad.component.html',
  styleUrls: ['./busca_Felicidad.component.css']
})
export class Busca_FelicidadComponent implements OnInit {

  @Output() busca_Felicidad = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  enlaceBusca_Felicidad(value: string ){
    this.busca_Felicidad.emit(value);
  }

}
