import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Primeng Modules
import { MegaMenuModule } from 'primeng/megamenu';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

//Primeng Modules Array
const modPrime : any [] = [
  MegaMenuModule,
  MenubarModule,
  ToolbarModule,
  AvatarModule,
  AvatarGroupModule,
  BreadcrumbModule,
  CardModule,
  CarouselModule,
  ButtonModule,
  RatingModule,
  FormsModule
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
