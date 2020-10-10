import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormEntity } from '../../models/entity';

@Component({
  selector: 'ga-form-entity',
  templateUrl: './form-entity.component.html',
  styleUrls: ['./form-entity.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormEntityComponent),
      multi: true
    }
  ]
})
export class FormEntityComponent implements ControlValueAccessor {
  model: FormEntity = <any>{};
  changeHandler: any;

  writeValue(obj: FormEntity): void {
    console.log('write value');
    this.model = obj;
  }

  registerOnChange(fn: any): void {
    this.changeHandler = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {

  }

  onChanges(value: any) {
    console.log(this.model, value);
    this.model.value = value;
    this.changeHandler(this.model);
  }
}
