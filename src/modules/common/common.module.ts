import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatabaseManagerService } from './services/database-manager.service';
import { FormEntityComponent } from './components/form-entity/form-entity.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FormEntityComponent
  ],
  exports: [
    FormEntityComponent
  ],
  providers: [
    DatabaseManagerService
  ]
})
export class GamifyAnythingCommonModule { }
