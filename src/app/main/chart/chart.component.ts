import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import ECharts = echarts.ECharts;
import EChartOption = echarts.EChartOption;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @ViewChild('chart')  chart: ElementRef;
  myChart;
  categories = [
    {
      name: "father link",
      keyword: {},
      base: "father link"
    },
    {
      name: "mother link",
      keyword:{},
      base: "mother link"
    }
  ];

  nodes = [
    {
      id: null,
      name: "father",
      value: "father",
      category: 'father link'
    },
    {
      id: null,
      name: "mother",
      value: "mother",
      category: 'mother link',
    },
    {
      id: null,
      name: "bob",
      value: "boy1",
      category: 'father link'
    },
    {
      id: null,
      name: "susan",
      value: "girl1",
      category: 'father link'
    },
    {
      id: null,
      name: "tom",
      value: "boy2",
      category: 'mother link'
    },
    {
      id: null,
      name: "lilithy",
      value: "girl2",
      category: 'mother link'
    }
  ];

  links = [
    {
      source: 'mother',
      target: 'father'
    },
    {
      source: "father",
      target: "boy1"
    },
    {
      source: "father",
      target: "girl1"
    },
    {
      source: 'mother',
      target: 'girl2'
    },
    {
      source: 'mother',
      target: 'boy2'
    }
  ];

  webkitDep;


  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.drawChart()
  }

  changechart(){
    this.nodes = [
      {
        id: null,
        name: "father",
        value: "father",
        category: 'father link'
      },
      {
        id: null,
        name: "mother",
        value: "mother",
        category: 'mother link',
      },
      {
        id: null,
        name: "pop",
        value: "boy1",
        category: 'father link'
      },
      {
        id: null,
        name: "andi",
        value: "girl1",
        category: 'father link'
      },
      {
        id: null,
        name: "tom",
        value: "boy2",
        category: 'mother link'
      },
      {
        id: null,
        name: "han meimei",
        value: "girl2",
        category: 'mother link'
      }
    ];

    this.links = [
      {
        source: "father",
        target: "boy2"
      },
      {
        source: "father",
        target: "girl2"
      },
      {
        source: 'mother',
        target: 'girl1'
      },
      {
        source: 'mother',
        target: 'boy1'
      }
    ];

    this.webkitDep = {
      type: "force",
      categories: this.categories,
      nodes: this.nodes,
      links: this.links
    }

    this.myChart.setOption({
      legend: {
        data: ['father link', 'mother link']
      },
      series: [{
        type: 'graph',
        layout: 'force',
        animation: false,
        label: {
          normal: {
            show:true,
            position: 'right'
          }
        },
        draggable: true,
        data: this.webkitDep.nodes.map((node, idx)=> {
          node.id = node.value
          return node;
        }),
        categories: this.webkitDep.categories,
        force: {
          edgeLength: 75,
          repulsion: 75
        },
        edges: this.webkitDep.links
      }]
    }, true);
  }

  drawChart(){
    this.myChart = echarts.init(this.chart.nativeElement)
    this.myChart.showLoading();
    this.webkitDep = {
      type: "force",
      categories: this.categories,
      nodes: this.nodes,
      links: this.links
    }
    this.myChart.hideLoading();

    let option = {
      legend: {
        data: ['father link', 'mother link']
      },
      series: [{
        type: 'graph',
        layout: 'force',
        animation: false,
        label: {
          normal: {
            show:true,
            position: 'right'
          }
        },
        draggable: true,
        data: this.webkitDep.nodes.map((node, idx)=> {
          node.id = node.value
          return node;
        }),
        categories: this.webkitDep.categories,
        force: {
          edgeLength: 75,
          repulsion: 75
        },
        edges: this.webkitDep.links
      }]
    };

    this.myChart.setOption(option);
  }
}
