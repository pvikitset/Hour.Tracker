import { Component, OnInit } from '@angular/core';
import { ApiService, Entry } from './shared/api.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'angular';
  xx: Entry = new Entry;
  entries: Entry[] = [];

  constructor(
    private _apiService: ApiService
  ){}

  ngOnInit() {

    console.log("OnInit started");
    this.xx.id = 1;
    this.xx.name = 'paul';
    this.xx.num = 88;

    let x2 = new Entry;
    x2.id = 2
    x2.name = 'YYY'
    x2.num = 1564

    this.entries.push(this.xx)
    this.entries.push(x2)

    this._apiService.sampleGetData().subscribe(res => {
      console.log(res);
    });

    this._apiService.samplePostData(this.entries, 456).subscribe((res) => {
      console.log(res);
    });

    console.log("OnInit Ended");
  }
}
