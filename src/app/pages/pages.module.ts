import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InHomeComponent } from './in-home/in-home.component';
import { HomeModule } from './home/home.module';
import { InHomeModule } from './in-home/in-home.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    HomeModule,
    InHomeModule
  ]
})
export class PagesModule { }
