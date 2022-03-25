import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<app-video [data]='data' [count]='count'
             (dataEvent)='updateData($event)' 
             (countEvent)='updateCount($event)'
  > </app-video>`,
})
export class AppComponent implements OnInit {
  //  name = 'Angular ' + VERSION.major;
  data: any = {};
  count: number;

  ngOnInit() {
    this.data.counter = 1;
    this.count = 1;
  }

  updateData(d) {
    d.counter = d.counter + 1;
    console.log(this.data.counter);
  }

  updateCount(c) {
    c = c + 1;
    console.log(this.count);
  }
}
