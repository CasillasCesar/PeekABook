import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { HomerComponent } from '../../components/homer/homer.component';
import { BookInfoComponent } from '../../components/book-info/book-info.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { CatalogComponent } from '../../components/catalog/catalog.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(
      [
        { path: 'home', component: HomeComponent, children:[
          { path: '', redirectTo: 'content', pathMatch: 'full' },
          { path: 'content', component: HomerComponent, data:{ breadcrumb: 'Home', loged:false}},
          { path: 'login', component: LoginComponent, data:{ breadcrumb: 'Login', loged:false}},
          { path: 'register', component: RegisterComponent, data:{ breadcrumb: 'Register', loged:false}},
          { path: 'book/:id', component: BookInfoComponent, data:{breadcrumb: 'Book Details',loged:false}},
          { path: 'catalog/news', component: CatalogComponent, data: { breadcrumb: 'Recientes', loged: false } },
          { path: 'catalog', component: CatalogComponent, data: { breadcrumb: 'Ciencia y Tecnología', loged: false } },
          { path: 'catalog/sci-ti', component: CatalogComponent, data: { breadcrumb: 'Ciencia y Tecnología', loged: false } },
          { path: 'catalog/history', component: CatalogComponent, data: { breadcrumb: 'Historia', loged: false } },
          { path: 'catalog/art', component: CatalogComponent, data: { breadcrumb: 'Arte y Cultura', loged: false } },
          { path: 'catalog/fiction', component: CatalogComponent, data: { breadcrumb: 'Ficción', loged: false } },
          { path: 'catalog/magical-realism', component: CatalogComponent, data: { breadcrumb: 'Realismo Mágico', loged: false } },
          { path: 'catalog/political-dystopian', component: CatalogComponent, data: { breadcrumb: 'Política y Distopía', loged: false } },
          { path: 'catalog/science-fiction', component: CatalogComponent, data: { breadcrumb: 'Ciencia Ficción', loged: false } },
          { path: 'catalog/coming-of-age', component: CatalogComponent, data: { breadcrumb: 'Crecimiento Personal', loged: false } },
          { path: 'catalog/romance', component: CatalogComponent, data: { breadcrumb: 'Romance', loged: false } },
          { path: 'catalog/adventure', component: CatalogComponent, data: { breadcrumb: 'Aventura', loged: false } },
          { path: 'catalog/non-fiction', component: CatalogComponent, data: { breadcrumb: 'No Ficción', loged: false } }
        ] },
      ]
    )
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
