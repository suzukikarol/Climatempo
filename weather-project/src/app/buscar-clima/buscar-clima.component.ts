import { Component, OnInit, Input } from '@angular/core';
import { ServiceApiService } from "../service-api.service";

@Component({
  selector: 'app-buscar-clima',
  templateUrl: './buscar-clima.component.html',
  styleUrls: ['./buscar-clima.component.css'],
  template: `city : {{city}}`
})
export class BuscarClimaComponent implements OnInit {

  estado="bahia";
  retorno:any;
  @Input() city:any;

  constructor(private myservice: ServiceApiService) { }

  ngOnInit() {
    this.myservice.getData(this.estado).subscribe((data) => {
      this.retorno =  Object.create(data).data[0]; 
          
    })
 };

  // buscaValor(event) {
  //   this.estado = event.target.value
  // }

   mostraValor() {
     this.city = this.retorno.city_name;
     console.log(this.retorno);
     console.log(this.city);  
  }

}
