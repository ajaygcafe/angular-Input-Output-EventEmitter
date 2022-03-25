import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video',
  template: `{{data.counter}} {{count }}
             <button (click)='sendData()'> send Data </button>
             <button (click)='sendCount()'> send Count </button> `,
})
export class ChildComponent {
  @Input() data: any;
  @Input() count: number;

  @Output() dataEvent = new EventEmitter();
  @Output() countEvent = new EventEmitter();

  sendData() {
    this.dataEvent.emit(this.data);
  }

  sendCount() {
    this.countEvent.emit(this.count);
  }
}
