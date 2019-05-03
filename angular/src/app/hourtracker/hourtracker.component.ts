import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hourtracker',
  templateUrl: './hourtracker.component.html',
  styleUrls: ['./hourtracker.component.less']
})
export class HourtrackerComponent implements OnInit {

  startTime: Date
  endTime: Date

  constructor() { }

  ngOnInit() {
  }

}
