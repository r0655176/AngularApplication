import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';
import { StartComponent } from '../start/start/start.component';
import { JstsComponent } from '../jsts/jsts/jsts.component';
import { AnatomieComponent } from '../anatomie/anatomie/anatomie.component';
import { BindingComponent } from '../binding/binding/binding.component';
import { ServiceComponent } from '../service/service/service.component';
import { RoutinghomeComponent } from '../routinghome/routinghome/routinghome.component';
import { HttpComponent } from '../http/http/http.component';
import { FormsComponent } from '../forms/forms/forms.component';
import { FirebaseComponent } from '../firebase/firebase/firebase.component';
import { StorageComponent } from '../storage/storage/storage.component';

const appRoutes: Routes = [
  { path: '', component:HomeComponent },
  { path: '1', component:StartComponent },
  { path: '2', component:JstsComponent },
  { path: '3', component:AnatomieComponent },
  { path: '4', component:BindingComponent },
  { path: '5', component:ServiceComponent },
  { path: '6', component:RoutinghomeComponent },
  { path: '7', loadChildren: '../modules/modules.module#ModulesModule' },
  { path: '8', component:HttpComponent },
  { path: '9', component:FormsComponent },
  { path: '10', component:FirebaseComponent },
  { path: '11', component:StorageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
