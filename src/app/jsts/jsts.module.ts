import { NgModule } from '@angular/core';
import { JstsComponent } from './jsts/jsts.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [JstsComponent]
})
export class JstsModule { }
