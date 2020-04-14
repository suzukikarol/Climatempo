import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-clima',
  templateUrl: './buscar-clima.component.html',
  styleUrls: ['./buscar-clima.component.css']
})
export class BuscarClimaComponent implements OnInit {

  cidade: any;

  mostrarInput: any;
  valor: any;
  busca: any

  constructor() { }

  ngOnInit(): void {
  }

  buscaValor(event) {
    this.busca = event.target.value
  }

  mostraValor() {
    console.log(this.busca)
  }

}
