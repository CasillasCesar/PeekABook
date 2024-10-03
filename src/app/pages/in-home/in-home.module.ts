import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InHomeComponent } from './in-home.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    InHomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(
      [
        { path: '', component: InHomeComponent }
      ]
    )
  ],
  exports:[
    InHomeComponent
  ]
})
export class InHomeModule { }
