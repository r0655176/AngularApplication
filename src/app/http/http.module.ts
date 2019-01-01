import { NgModule } from '@angular/core';
import { HttpComponent } from './http/http.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HttpComponent]
})
export class HttpModule { }
