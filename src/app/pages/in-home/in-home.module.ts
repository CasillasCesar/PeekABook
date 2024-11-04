import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InHomeComponent } from './in-home.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { HomerComponent } from '../../components/homer/homer.component';



@NgModule({
  declarations: [
    InHomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(
      [
        { path: '', component: InHomeComponent, children:[
          { path: 'content', component: HomerComponent, data:{loged:true}},
        ] }
      ]
    )
  ],
  exports:[
    InHomeComponent
  ]
})
export class InHomeModule { }
