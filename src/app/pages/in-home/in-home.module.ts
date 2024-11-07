import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InHomeComponent } from './in-home.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { HomerComponent } from '../../components/homer/homer.component';
import { BookInfoComponent } from '../../components/book-info/book-info.component';
import { CatalogComponent } from '../../components/catalog/catalog.component';



@NgModule({
  declarations: [
    InHomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(
      [
        { path: 'in-home', component: InHomeComponent, children:[
          { path: '', redirectTo: 'content', pathMatch: 'full' },
          { path: 'content', component: HomerComponent, data:{breadcrumb: 'Home',loged:true}},
          { path: 'book/:id', component: BookInfoComponent, data:{breadcrumb: 'Book Details',loged:true}},
          { path: 'catalog', component: CatalogComponent},
          { path: 'catalog/news', component: CatalogComponent},
          { path: 'catalog/sci-ti', component: CatalogComponent},
          { path: 'catalog/history', component: CatalogComponent},
          { path: 'catalog/art', component: CatalogComponent},
          { path: 'catalog/fiction', component: CatalogComponent},
        ] }
      ]
    )
  ],
  exports:[
    InHomeComponent
  ]
})
export class InHomeModule { }
