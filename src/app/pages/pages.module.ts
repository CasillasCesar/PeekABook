import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InHomeComponent } from './in-home/in-home.component';
import { HomeModule } from './home/home.module';
import { InHomeModule } from './in-home/in-home.module';
import { ComponentsModule } from '../components/components.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [

    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeModule,
    InHomeModule,
    RegisterComponent,
    LoginComponent
  ]
})
export class PagesModule { }
