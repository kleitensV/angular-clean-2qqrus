import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ModalComponent } from './modal.component';
import {
  NcModalModule,
  NcModalService,
  NcDatepickerModule,
  NcDateStructAdapter,
  NcSelectModule,
  NcDropdownModule
} from '@vismaux/ngx-nordic-cool';
@NgModule({
  imports: [BrowserModule, FormsModule, NcModalModule, NcDatepickerModule, NcSelectModule,NcDropdownModule],
  declarations: [AppComponent, HelloComponent,ModalComponent],
  providers: [NcModalService, NcDateStructAdapter],
  bootstrap: [AppComponent],
})
export class AppModule {}
