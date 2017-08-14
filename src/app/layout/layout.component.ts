import { Component, OnInit } from '@angular/core';
import { MenuBar } from 'rebirth-ng/menu-bar/menu-bar.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  menu: MenuBar;
  sidebar: MenuBar;

  constructor() { }

  ngOnInit() {
    this.menu = {
      logo: './assets/images/logo.png',
      title: '中电昆辰',
      home: ['./'],
      menus: []
    };

    this.sidebar = {
      menus: [
        {
          text: '状态监控',
          icon: 'glyphicon glyphicon-eye-open',
          handler: () => {
          },
          cssClass: ''
        }
      ]
    }
  }
}
