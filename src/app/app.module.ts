import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {
  NcModalModule,
  NcModalService,
  NcDatepickerModule,
  NcDateStructAdapter,
} from '@vismaux/ngx-nordic-cool';
@NgModule({
  imports: [BrowserModule, FormsModule, NcModalModule, NcDatepickerModule],
  declarations: [AppComponent, HelloComponent],
  providers: [NcModalService, NcDateStructAdapter],
  bootstrap: [AppComponent],
})
export class AppModule {}
