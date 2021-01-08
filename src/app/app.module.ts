import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [AppComponent],
  imports: [NgxDatatableModule, BrowserModule, NoopAnimationsModule, MatOptionModule, MatFormFieldModule, MatSelectModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
