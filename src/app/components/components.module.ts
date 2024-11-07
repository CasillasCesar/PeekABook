import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimengModule } from '../primeng.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HomerComponent } from './homer/homer.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { CatalogComponent } from './catalog/catalog.component';



@NgModule({
  declarations: [
    NavbarComponent,
    BreadcrumbComponent,
    HomerComponent,
    BookCardComponent,
    BookInfoComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    NavbarComponent,
    HomerComponent,
    BookInfoComponent,
    CatalogComponent
  ]
})
export class ComponentsModule { }
