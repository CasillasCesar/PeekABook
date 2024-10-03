import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Primeng Modules
import { MegaMenuModule } from 'primeng/megamenu';
import { ToolbarModule } from 'primeng/toolbar';

//Primeng Modules Array
const modPrime : any [] = [
  MegaMenuModule,
  ToolbarModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modPrime
  ],
  exports : [
    modPrime
  ]
})
export class PrimengModule { }
