import { NgModule } from '@angular/core';
import { ModulesComponent } from './modules/modules.component';
import { SharedModule } from '../shared/shared.module';
import { ModulesroutingModule } from '../modulesrouting/modulesrouting.module';

@NgModule({
  imports: [
    SharedModule,
    ModulesroutingModule
  ],
  declarations: [ModulesComponent]
})
export class ModulesModule { }
