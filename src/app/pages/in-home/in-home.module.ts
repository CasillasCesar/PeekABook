import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InHomeComponent } from './in-home.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { HomerComponent } from '../../components/homer/homer.component';
import { BookInfoComponent } from '../../components/book-info/book-info.component';
import { CatalogComponent } from '../../components/catalog/catalog.component';
import { AboutComponent } from '../../components/about/about.component';



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
          { path: 'catalog/news', component: CatalogComponent, data: { breadcrumb: 'Recientes', loged: true } },
          { path: 'catalog', component: CatalogComponent, data: { breadcrumb: 'Ciencia y Tecnología', loged: true } },
          { path: 'catalog/search/:busqueda', component: CatalogComponent, data: { breadcrumb: 'Ciencia y Tecnología', loged: true } },
          { path: 'catalog/sci-ti', component: CatalogComponent, data: { breadcrumb: 'Ciencia y Tecnología', loged: true } },
          { path: 'catalog/history', component: CatalogComponent, data: { breadcrumb: 'Historia', loged: true } },
          { path: 'catalog/art', component: CatalogComponent, data: { breadcrumb: 'Arte y Cultura', loged: true } },
          { path: 'catalog/fiction', component: CatalogComponent, data: { breadcrumb: 'Ficción', loged: true } },
          { path: 'catalog/magical-realism', component: CatalogComponent, data: { breadcrumb: 'Realismo Mágico', loged: true } },
          { path: 'catalog/political-dystopian', component: CatalogComponent, data: { breadcrumb: 'Política y Distopía', loged: true } },
          { path: 'catalog/science-fiction', component: CatalogComponent, data: { breadcrumb: 'Ciencia Ficción', loged: true } },
          { path: 'catalog/coming-of-age', component: CatalogComponent, data: { breadcrumb: 'Crecimiento Personal', loged: true } },
          { path: 'catalog/romance', component: CatalogComponent, data: { breadcrumb: 'Romance', loged: true } },
          { path: 'catalog/adventure', component: CatalogComponent, data: { breadcrumb: 'Aventura', loged: true } },
          { path: 'catalog/non-fiction', component: CatalogComponent, data: { breadcrumb: 'No Ficción', loged: true } },
          { path: 'about', component: AboutComponent, data: { breadcrumb: 'About Us', loged: true }  }, // Ruta para "Sobre Nosotros"
        ] }
      ]
    )
  ],
  exports:[
    InHomeComponent
  ]
})
export class InHomeModule { }
