import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ParentInputControl} from './parent-input-control-component/parent-input-control.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FieldErrorsComponent} from './field-errors/field-errors.component';
import { ChildInputComponent } from './child-input-control-component/child-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentInputControl,
    FieldErrorsComponent,
    ChildInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
