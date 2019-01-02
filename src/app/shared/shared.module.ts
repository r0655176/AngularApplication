import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule, MatListModule, MatCardModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule, 
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule

  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule, 
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: []
})
export class SharedModule { }
