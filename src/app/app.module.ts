import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [NgxDatatableModule, BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
