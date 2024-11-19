import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng.module'
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],  // Aquí declaras tus componentes
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimengModule,
    PagesModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
    ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ]  // Este es el componente raíz que arranca la aplicación
})
export class AppModule {}
