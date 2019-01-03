import { NgModule } from '@angular/core';
import { StorageComponent } from './storage/storage.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [StorageComponent]
})
export class StorageModule { }
