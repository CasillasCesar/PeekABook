import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimengModule } from '../primeng.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HomerComponent } from './homer/homer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    BreadcrumbComponent,
    HomerComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    NavbarComponent,
    HomerComponent
  ]
})
export class ComponentsModule { }
