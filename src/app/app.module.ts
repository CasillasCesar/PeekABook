import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng.module'
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [AppComponent],  // Aquí declaras tus componentes
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimengModule,
    PagesModule,
    AppRoutingModule,
    ComponentsModule
    ],
  bootstrap: [AppComponent]  // Este es el componente raíz que arranca la aplicación
})
export class AppModule {}
