import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { HomerComponent } from '../../components/homer/homer.component';
import { BookInfoComponent } from '../../components/book-info/book-info.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';



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
        ] },
      ]
    )
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
