import { Component, VERSION } from '@angular/core';
import { NcDropdownDirective } from '@vismaux/ngx-nordic-cool';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public text: NcDropdownDirective = {} as NcDropdownDirective;
  public excel: NcDropdownDirective = {} as NcDropdownDirective;
  name = 'Angular ' + VERSION.major;
  items=['test1','test2'];
}
