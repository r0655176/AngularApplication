import { NgModule } from '@angular/core';
import { FormsComponent } from './forms/forms.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [FormsComponent]
})
export class FormsModule { }
