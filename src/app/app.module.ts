import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng.module'


@NgModule({
  declarations: [AppComponent],  // Aquí declaras tus componentes
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimengModule,
    AppRoutingModule
    ],  // Aquí importas otros módulos necesarios
  bootstrap: [AppComponent]  // Este es el componente raíz que arranca la aplicación
})
export class AppModule {}
