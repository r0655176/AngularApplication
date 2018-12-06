import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';
import { StartComponent } from '../start/start/start.component';
import { JstsComponent } from '../jsts/jsts/jsts.component';
import { AnatomieComponent } from '../anatomie/anatomie/anatomie.component';
import { BindingComponent } from '../binding/binding/binding.component';

const appRoutes: Routes = [
  { path: '', component:HomeComponent },
  { path: '1', component:StartComponent },
  { path: '2', component:JstsComponent },
  { path: '3', component:AnatomieComponent },
  { path: '4', component:BindingComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
