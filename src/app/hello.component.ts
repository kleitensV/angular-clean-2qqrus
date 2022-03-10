import { Component, Input } from '@angular/core';
import { NcModalService } from '@vismaux/ngx-nordic-cool';
import { ModalComponent } from './modal.component';
@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{name}}!</h1>
    <button (click)="onLinkClick()">open modal</button>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
  constructor(private modal: NcModalService) {}
  onLinkClick() {
    console.log('click');
    this.modal
      .open(ModalComponent, [] as any, {
        size: 'xl',
        role: 'dialog',
        closeOnEscape: true,
        closeOnNavigation: true,
      })
      .afterClosed()
      .subscribe((result) => console.log('result from the modal', result));
  }
}
