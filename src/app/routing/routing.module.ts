import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';
import { StartComponent } from '../start/start/start.component';

const appRoutes: Routes = [
  { path: '', component:HomeComponent },
  { path: '1', component:StartComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
