import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InHomeComponent } from './in-home.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { HomerComponent } from '../../components/homer/homer.component';
import { BookInfoComponent } from '../../components/book-info/book-info.component';



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
          { path: 'content', component: HomerComponent, data:{loged:true}},
          { path: 'book/:id', component: BookInfoComponent, data:{loged:true}},
        ] }
      ]
    )
  ],
  exports:[
    InHomeComponent
  ]
})
export class InHomeModule { }
