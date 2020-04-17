import { Component, OnInit, Input } from '@angular/core';
import { ServiceApiService } from "../service-api.service";
import { ModelResponse } from './model.response';


@Component({
  selector: 'app-buscar-clima',
  templateUrl: './buscar-clima.component.html',
  styleUrls: ['./buscar-clima.component.css'],
  template: `city : {{city}}`
})
export class BuscarClimaComponent implements OnInit {

  public model:ModelResponse;

  city:string = "sao paulo"; 

  
  // cidade:any
  // temperatura:any
  // humidade:any
  // velocidade:any
  // sensacao:any
  


  constructor(private myservice: ServiceApiService) { }

  ngOnInit() {
    // let dataWeather;
    // this.myservice.getData(this.city).subscribe((data) => {
    //   dataWeather = data;
    //   this.model = dataWeather.data[0]
    //   this.cidade = this.model.city_name;
    //   this.temperatura = this.model.temp;
    //   this.humidade = this.model.rh;
    //   this.velocidade = this.model.wind_spd;
    //   this.sensacao = this.model.app_temp;
      
    //   // this.model =  Object.create(data).data[0];
    //   // this.retorno = this.model
    //   // console.log(this.model)
      
    // })
 };

  // buscaValor(event) {
  //   this.estado = event.target.value
  // }


   mostraValor() {
    
  }

}
