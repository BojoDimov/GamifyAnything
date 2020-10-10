import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormEntity } from 'src/modules/common/models/entity';

@Component({
  selector: 'ga-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormComponent),
      multi: true
    }
  ]
})
export class FormComponent implements ControlValueAccessor {
  model: FormEntity = <any>{};
  changeHandler: any;

  writeValue(obj: any): void {
    this.model = obj;
  }
  registerOnChange(fn: any): void {
    this.changeHandler = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  onChanges(value, index) {
    this.model.children[index] = value;
    this.changeHandler(this.model);
  }
}
