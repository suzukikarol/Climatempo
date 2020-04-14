import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostraTempoComponent } from './mostra-tempo/mostra-tempo.component';
import { BuscarClimaComponent } from './buscar-clima/buscar-clima.component';

@NgModule({
  declarations: [
    AppComponent,
    MostraTempoComponent,
    BuscarClimaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
