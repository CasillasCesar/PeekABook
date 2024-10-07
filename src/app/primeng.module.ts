import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Primeng Modules
import { MegaMenuModule } from 'primeng/megamenu';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenubarModule } from 'primeng/menubar';

//Primeng Modules Array
const modPrime : any [] = [
  MegaMenuModule,
  MenubarModule,
  ToolbarModule,
  AvatarModule,
  AvatarGroupModule
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
