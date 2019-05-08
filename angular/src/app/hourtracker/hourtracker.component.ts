import { Component, OnInit, ViewChild } from '@angular/core';
import { Duration } from '../shared/duration';
import { EntrytableComponent } from '../entrytable/entrytable.component';
import { Event } from '@angular/router';
import { Entry } from '../shared/entry';

@Component({
  selector: 'app-hourtracker',
  templateUrl: './hourtracker.component.html',
  styleUrls: ['./hourtracker.component.less']
})
export class HourtrackerComponent implements OnInit {

  @ViewChild('entryTable') entryTable: EntrytableComponent;


  startTime: Date
  endTime: Date 
  duration: Duration = new Duration;
  durationText: string
  counter: number = 0;



  constructor() { }

  ngOnInit() {
    
    //this.computeDurationText()

  }

  handleAdd() {
    let entry = new Entry();

    entry.startTime = this.startTime
    entry.endTime = this.endTime
    entry.duration = this.duration
    entry.id = this.counter + 1;
    this.counter++;
    this.entryTable.add(entry)
    //this.refresh()
  }

  refresh(e: Event) {
    console.log(e)
    this.startTime = undefined
    this.endTime = undefined
    this.duration = new Duration;
    this.durationText = ""
  }

  computeDuration() {
    if (this.endTime != undefined && this.startTime != undefined) {
      var diff = this.endTime.getTime() - this.startTime.getTime()
      this.duration.day = Math.floor(diff / 86400000);
      this.duration.hour = Math.floor((diff % 86400000) / 3600000); 
      this.duration.minute = Math.round(((diff % 86400000) % 3600000) / 60000);

      if (this.duration.day > 0) {
        this.duration.hour = this.duration.hour + this.duration.day * 24
        this.duration.day = 0;
      }

    }

    this.computeDurationText()
  }
  
  computeDurationText() {
    if (this.duration.hour == 1) {

    }

    this.duration.text = this.duration.hour + this.getHour() + this.duration.minute + this.getMinute()
  }

  getHour(): string {
    if (this.duration.hour > 1 || this.duration.hour < -1) {
      return " hours "
    } else {
      return " hour "
    } 
  }

  getMinute(): string {
    if (this.duration.minute > 1 || this.duration.minute < -1) {
      return " minutes "
    } else{
      return " minute "
    } 
  }


}
