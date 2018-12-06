import { NgModule } from '@angular/core';
import { BindingComponent } from './binding/binding.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [BindingComponent]
})
export class BindingModule { }
