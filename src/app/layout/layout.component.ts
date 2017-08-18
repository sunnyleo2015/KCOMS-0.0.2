import { Component, OnInit } from '@angular/core';
import { MenuBar } from 'rebirth-ng/menu-bar/menu-bar.model';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  menu: MenuBar;
  sidebar: MenuBar;

  constructor(private router: Router) { }

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
            this.router.navigate(['./main/monitor'])
          },
          cssClass: ''
        },
        {
          text: '基站设置',
          icon: 'glyphicon glyphicon-cog',
          handler: () => {
            this.router.navigate(['./main/setting'])
          },
          cssClass: ''
        }
      ]
    }
  }

  toRouter(url){
    this.router.navigate([url]);
  }
}
