import { NgModule } from '@angular/core';
import { AnatomieComponent } from './anatomie/anatomie.component';
import { SharedModule } from '../shared/shared.module';
import { DirectiveComponent } from './directive/directive.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [AnatomieComponent, DirectiveComponent]
})
export class AnatomieModule { }
