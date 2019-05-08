import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Entry } from '../shared/entry';

@Component({
  selector: 'entryTable',
  templateUrl: './entrytable.component.html',
  styleUrls: ['./entrytable.component.less']
})
export class EntrytableComponent implements OnInit {

  entries: Entry[] = [];
  cols: any[];
  @Output() refreshEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'startTime', header: 'Start Time' },
      { field: 'endTime', header: 'End Time' },
      { field: 'duration', header: 'Duration' }
    ];
  }
  add(e: Entry) {
    this.entries.push(e);
    this.refreshEvent.emit(e);
  }


}
