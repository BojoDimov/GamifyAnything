import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamifyAnythingCommonModule } from 'src/modules/common/common.module';
import { FormsModule } from '@angular/forms';
import { GamifyAnythingFormsModule } from 'src/modules/forms/forms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    GamifyAnythingCommonModule,
    GamifyAnythingFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
