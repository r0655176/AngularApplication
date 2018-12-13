import { NgModule } from '@angular/core';
import { RoutinghomeComponent } from './routinghome/routinghome.component';
import { SharedModule } from '../shared/shared.module';
import { RoutingModule } from '../routing/routing.module';

@NgModule({
  imports: [
    SharedModule,
    RoutingModule
  ],
  declarations: [RoutinghomeComponent]
})
export class RoutinghomeModule { }
