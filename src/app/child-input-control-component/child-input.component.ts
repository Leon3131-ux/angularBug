import {ChangeDetectorRef, Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-nested-custom-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChildInputComponent),
      multi: true
    }
  ]
})
export class ChildInputComponent implements ControlValueAccessor{

  value: string = '';

  onChange: Function = () => {};
  onTouched: Function = () => {};

  onKeyDown(event: any){}

  onInput(event: any){
    this.value = event.target.value;
    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

}
