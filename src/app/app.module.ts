import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing/routing.module';
import { HomeModule } from './home/home.module';
import { StartModule } from './start/start.module';
import { JstsModule } from './jsts/jsts.module';
import { AnatomieModule } from './anatomie/anatomie.module';
import { BindingModule } from './binding/binding.module';
import { ServiceModule } from './service/service.module';
import { RoutinghomeModule } from './routinghome/routinghome.module';
import { HttpModule } from './http/http.module';
import { FormsModule } from './forms/forms.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule, 
    RoutingModule,
    HomeModule,
    StartModule,
    JstsModule,
    AnatomieModule,
    BindingModule,
    ServiceModule,
    RoutinghomeModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
