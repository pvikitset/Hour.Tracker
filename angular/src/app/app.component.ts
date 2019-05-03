import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './shared/api.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Entry } from './shared/entry';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'angular';

  @ViewChild('menuItems') menu: MenuItem[];

  activeItem: MenuItem;
  items: MenuItem[];

  constructor(
  ){}

  ngOnInit() {
    this.items = [
      { label: 'Hour Tracker', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/hourtracker'] }
      //add more menu here
    ];

    this.activeItem = this.menu['Hour Tracker'];
  }

  activateMenu() {
    this.activeItem = this.menu['activeItem'];
  }
}
