import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Entry } from '../shared/entry';

@Component({
  selector: 'entryTable',
  templateUrl: './entrytable.component.html',
  styleUrls: ['./entrytable.component.less']
})
export class EntrytableComponent implements OnInit {

  entries: Entry[] = [];

  @Output() refreshEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }


  add(e: Entry) {
    //console.log(e)


    this.refreshEvent.emit(e);
  }


}
