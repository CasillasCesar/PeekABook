import { InHomeModule } from './pages/in-home/in-home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  {
    path:"in-home",
    loadChildren : ()=>import('./pages/in-home/in-home.module').then(m => m.InHomeModule)
  },
  {
    path:"home",
    loadChildren : ()=>import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path : '',
    redirectTo : 'home',
    pathMatch: 'full'
  },
  {
    path : '**',
    redirectTo : 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
