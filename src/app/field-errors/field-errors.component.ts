import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormError} from './form-error.model';

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.css']
})
export class FieldErrorsComponent{

  @Input() errors: FormError[] | undefined;

}
