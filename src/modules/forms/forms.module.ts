import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { GamifyAnythingCommonModule } from '../common/common.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormsModule,
    GamifyAnythingCommonModule
  ],
  exports: [
    FormComponent
  ]
})
export class GamifyAnythingFormsModule { }
