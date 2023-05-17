import {Component, forwardRef} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Component({
  selector: 'app-validated-password-input',
  templateUrl: './parent-input-control.component.html',
  styleUrls: ['./parent-input-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ParentInputControl),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: ParentInputControl,
      multi: true
    }
  ]
})
export class ParentInputControl implements ControlValueAccessor, Validator {

  public internalValue: string = '';

  onChange: any = () => {  };
  onTouched: any = () => {  };

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  writeValue(value: any): void {
    this.internalValue = value;
  }

  onInternalValueChange(event: any) {
    if (event?.target?.value){
      this.internalValue = event.target.value;
    }
    this.onChange(this.internalValue);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return {'error': true};
  }
}
