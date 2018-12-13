import { NgModule } from '@angular/core';
import { ServiceComponent } from './service/service.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ServiceComponent]
})
export class ServiceModule { }
