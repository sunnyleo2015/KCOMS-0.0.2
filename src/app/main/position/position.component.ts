import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MethodService } from '../../service/method.service';
import * as _ from 'lodash';
import * as THREE from 'three';
import * as Trackballcontrols from 'three-trackballcontrols';
import {NzNotificationService} from 'ng-zorro-antd';


@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss'],
})
export class PositionComponent implements OnInit {

  @ViewChild('MapGL')  mapGL: ElementRef;

  renderer ;
  camera;
  scene;
  light;

  trackBallControls;
  noRotate: boolean = false;
  noZoom: boolean =false;
  noPan: boolean = false;

  clock = new THREE.Clock();
  delta = this.clock.getDelta();
  doRenderFlag = true;

  manager;

  readerList:any[] = [];

  constructor(private method: MethodService, private notification: NzNotificationService) { }

  ngOnInit() {
    this.initDraw();
    this.connectManager();
  }

  createNotification(type, title, content){
    this.notification.create(type, title, content);
  };

  connectManager(){
    this.manager = new WebSocket("ws://127.0.0.1:8888");
    this.manager.onmessage = (res)=>{
    };
    this.manager.onerror = (error)=>{
      console.log(error);
      this.createNotification('error', '连接失败', '连接websocket失败');
    };
    setTimeout(()=>{this.getLocalizeInfo();},100);
  }

  initRenderer(){
    this.renderer =  new THREE.WebGLRenderer();
    this.renderer.setSize(1280, 800);
    this.renderer.setClearColor(0xf5f5f5);
    this.mapGL.nativeElement.append(this.renderer.domElement);
  }

  initCamera(){
    this.camera = new THREE.PerspectiveCamera(45,1280/800,0.1,100000);
    this.camera.position.x = 500;
    this.camera.position.y = 500;
    this.camera.position.z = 2600;
    this.camera.up.x = 0;
    this.camera.up.y = 1;
    this.camera.up.z = 0;
    this.camera.lookAt({
      x:500,
      y:500,
      z:0
    });
  }

  initScene() {
    this.scene = new THREE.Scene();
  }

  initLight(){
    this.light = new THREE.DirectionalLight(0xFF0000,1.0,0);
    this.light.position.set(2000,2000,2000);
    this.scene.add(this.light);
  }

  initFrame(){
    let planeGeometry = new THREE.PlaneGeometry(4000, 4000, 1, 1);
    let planeMaterial = new THREE.MeshLambertMaterial({opacity: 0, transparent: true, color: 0xffffff});
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);

    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = -1;

    this.scene.add(plane);

    let material = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors});
    let frame_geometry = new THREE.Geometry();
    let point_color_1 = new THREE.Color(0x49a9ee);
    let point_color_2 = new THREE.Color(0xff0000);
    let point_1 = new THREE.Vector3(-300,0,0);
    let point_2 = new THREE.Vector3(1500,0,0);

    frame_geometry.vertices.push(point_1);
    frame_geometry.vertices.push(point_2);
    frame_geometry.colors.push(point_color_1,point_color_1);

    for (let i=-30;i<150;i++){
      let line = new THREE.Line(frame_geometry,material,THREE.LineSegments );
      line.position.y = i*10;
      this.scene.add(line);

      line = new THREE.Line(frame_geometry,material,THREE.LineSegments );
      line.rotation.z = (90 * Math.PI)/180;
      line.position.x = i*10;
      this.scene.add(line)
    }


    let cross_geometryX = new THREE.Geometry();

    cross_geometryX.vertices.push(new THREE.Vector3(-400,0,0));
    cross_geometryX.vertices.push(new THREE.Vector3(1800,0,0));
    cross_geometryX.colors.push(point_color_2,point_color_2);

    let cross_lineX =  new THREE.Line(cross_geometryX,material,THREE.LineSegments );
    cross_lineX.position.y = 0;
    this.scene.add(cross_lineX);

    let cross_geometryY = new THREE.Geometry();
    cross_geometryY.vertices.push(new THREE.Vector3(-400,0,0));
    cross_geometryY.vertices.push(new THREE.Vector3(1800,0,0));
    cross_geometryY.colors.push(new THREE.Color(0x0a85f3),new THREE.Color(0x0a85f3));

    let cross_lineY =  new THREE.Line(cross_geometryY,material,THREE.LineSegments );
    cross_lineY.rotation.z = (90 * Math.PI)/180;
    cross_lineY.position.x = 0;
    this.scene.add(cross_lineY);

    let cross_geometryZ = new THREE.Geometry();
    cross_geometryZ.vertices.push(new THREE.Vector3(0,0,-300));
    cross_geometryZ.vertices.push(new THREE.Vector3(0,0,1500));
    cross_geometryZ.colors.push(new THREE.Color(0xf89406),new THREE.Color(0xf89406));
    let cross_lineZ =  new THREE.Line(cross_geometryZ,material,THREE.LineSegments );
    this.scene.add(cross_lineZ);
  }

  initTrackBallControls(){
    this.trackBallControls = new Trackballcontrols(this.camera, this.renderer.domElement);
    this.trackBallControls.target.set(500,500,0);
    this.trackBallControls.rotateSpeed = 3.0;
    this.trackBallControls.zoomSpeed = 1.0;
    this.trackBallControls.panSpeed = 1.0;
  }

  initFont(){
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    context.font = "Bold 40px Arial";
    context.fillStyle = "rgba(255,0,0,0.95)";
    context.fillText('中电昆辰', 0, 50);
    let texture = new THREE.Texture(canvas)
    texture.needsUpdate = true;

    let material = new THREE.MeshBasicMaterial( {map: texture, side:THREE.DoubleSide } );
    material.transparent = true;

    let mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(canvas.width, canvas.height),
      material
    );
    mesh.position.set(0,50,1);

    this.scene.add(mesh);
  }

  doRender(){
    this.trackBallControls.noZoom  = this.noZoom;
    this.trackBallControls.noRotate = this.noRotate;
    this.trackBallControls.noPan = this.noPan;
    this.trackBallControls.update(this.delta);

    requestAnimationFrame(()=>{return this.doRender()});
    this.renderer.render(this.scene, this.camera);
  }

  initDraw(){
    this.initRenderer();
    this.initCamera();
    this.initScene();
    this.initLight();
    this.initFrame();
    this.initFont();
    this.initTrackBallControls();
    this.doRender();
  }

  getLocalizeInfo(){
    this.manager.send("$FILE_READ,1,reader.csv");
    this.manager.onmessage = (res)=>{
      this.readerList = this.method.formatDate(res).split(/\n/);
      this.readerList.shift();
      this.readerList.pop();
      this.readerList = _.map(this.readerList, (readerInfo)=>{
        let reader = readerInfo.split(',');
        return {
          id: reader[0],
          name: reader[1],
          ip: reader[2],
          x: reader[3],
          y: reader[4],
          z: reader[5],
          latency: reader[6],
          area: reader[7],
          height: reader[8],
          latencyId: reader[9]
        }
      });
      _.forEach(this.readerList,(reader)=>{
        this.initReader(reader);
        this.initReaderFont(reader);
      });

      console.log(this.readerList);
      this.createNotification('success', '连接成功', '已连接websocket并获取基站定位数据');
    };
  }

  initReader(reader){
    let readerGeometry = new THREE.BoxGeometry(10,10,10);
    let readerMaterial = new THREE.MeshLambertMaterial({color: 0x2196f3});

    let readerLabel = new THREE.Mesh(readerGeometry,readerMaterial);

    readerLabel.name = `reader-${reader.id}`;
    readerLabel.position.set(reader.x,reader.y,reader.z);
    this.scene.add(readerLabel);
  }

  initReaderFont(reader){
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    context.font = "Bold 24px Arial";
    context.fillStyle = "rgba(255,0,0,0.95)";
    context.fillText(`${reader.id}`, canvas.width/2+5, canvas.height/2+5, 200);
    let texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    let readerMaterial = new THREE.MeshBasicMaterial({map: texture});
    readerMaterial.transparent=true;

    let readerLabel = new THREE.Mesh(new THREE.PlaneGeometry(canvas.width,canvas.height) ,readerMaterial);

    readerLabel.name = `font-${reader.id}`;
    readerLabel.position.set(reader.x,reader.y,reader.z);

    this.scene.add(readerLabel);
  }
}
