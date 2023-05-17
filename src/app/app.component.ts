import { Component } from '@angular/core';
import {AbstractControl, FormBuilder} from '@angular/forms';
import {FormError} from './field-errors/form-error.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angularBug';
  formGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      field: ''
    });

  }

  fieldErrors(): FormError[] | undefined {
    const control = this.formGroup.get('field');
    if (control && control.errors) {
      return this.getErrors(control);
    } else {
      return undefined;
    }
  }

  protected getErrors(control: AbstractControl): FormError[] {
    if (!control || !control.errors) {
      return [];
    }
    return Object.keys(control.errors).map(key => {return {value: key}});
  }
}
