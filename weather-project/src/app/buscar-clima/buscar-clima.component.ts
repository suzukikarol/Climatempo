import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from "../service-api.service";

@Component({
  selector: 'app-buscar-clima',
  templateUrl: './buscar-clima.component.html',
  styleUrls: ['./buscar-clima.component.css']
})
export class BuscarClimaComponent implements OnInit {

  estado="sao paulo";
  mostrarInput: any;
  tempo:any;
  busca: any;

  constructor(private myservice: ServiceApiService) { }

  ngOnInit() {
    this.myservice.getData(this.estado).subscribe((data) => {
      this.tempo =  Object.create(data).data[0]; 
          
    })
 };

  // buscaValor(event) {
  //   this.estado = event.target.value
  // }

   mostraValor() {
     console.log(this.tempo)
  }

}
