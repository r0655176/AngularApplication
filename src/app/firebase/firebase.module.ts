import { NgModule } from '@angular/core';
import { FirebaseComponent } from './firebase/firebase.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [FirebaseComponent]
})
export class FirebaseModule { }
