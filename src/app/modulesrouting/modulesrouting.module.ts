import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from '../modules/modules/modules.component';

const appRoutes: Routes = [
  { path: '', component:ModulesComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ModulesroutingModule { }
