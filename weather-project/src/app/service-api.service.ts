import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiKey = "9fb9b8560938403ab0f9983441b84b9e";
var apiUrl =`https://api.weatherbit.io/v2.0/current?city=`;
var finalUrl = ",BR&key=";

@Injectable({
  providedIn: 'root'
})

export class ServiceApiService {

  constructor(private http:HttpClient) { }

  getData(city:string) {
    return this.http.get(apiUrl + city + finalUrl + apiKey); 
 }

}
