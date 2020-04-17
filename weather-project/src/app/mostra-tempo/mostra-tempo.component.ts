import { Component, OnInit } from '@angular/core';

import { ServiceApiService } from '../service-api.service';
import { ModelResponse } from '../buscar-clima/model.response';

@Component({
  selector: 'app-mostra-tempo',
  templateUrl: './mostra-tempo.component.html',
  styleUrls: ['./mostra-tempo.component.css']
})
export class MostraTempoComponent implements OnInit {

  public model: ModelResponse;

  city:string = 'São paulo';
  valor_input: any;

  icon:any;
  cidade: any
  temperatura: any
  umidade: any
  velocidade: any
  sensacao: any

  constructor(private service: ServiceApiService) { }

  ngOnInit(): any {
      this.mostraValor();
  }

  getValue(event){
    this.city = event.target.value;
  }

  callApi(valor:string) {
    let dataWeather;
    this.service.getData(valor).subscribe((data) => {
      dataWeather = data;
      this.model = dataWeather.data[0]
      this.icon = dataWeather.data[0];
      
      this.cidade = this.model.city_name;
      this.temperatura = this.model.temp;
      this.umidade = this.model.rh;
      this.velocidade = this.model.wind_spd;
      this.sensacao = this.model.app_temp;
      

      // this.model =  Object.create(data).data[0];
      // this.retorno = this.model
      // console.log(this.model)

    })
  }
         mostraValor() {
                 this.callApi(this.city);

}
}