import { NgModule } from '@angular/core';
import { StartComponent } from './start/start.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [StartComponent]
})
export class StartModule { }
