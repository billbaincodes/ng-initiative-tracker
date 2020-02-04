import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'three'


@Component({
  selector: 'tracker-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  @Output() access = new EventEmitter<boolean>();

  spinSpeed = 0.01;

  constructor() {
    // this.createComponentInitCallback = this.createComponentInitCallback.bind(this);
  }

  ngOnInit() {
    this.pixar()
  }

  spin(){
    if(this.spinSpeed < 0.21) {
      this.spinSpeed += 0.05
    } else {
      this.spinSpeed = 0.01
    }
    console.log('spinSpeed', this.spinSpeed );
  }

  pixar() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    let poly = new THREE.IcosahedronGeometry(2, 0)

    // var geometry = new THREE.BoxBufferGeometry( 100, 100, 100 );
    var edges = new THREE.EdgesGeometry( poly );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: '#23FF00' } ) );
    scene.add( line );

    var material = new THREE.MeshBasicMaterial();
    var cube = new THREE.Mesh( poly, material );
    // scene.add( cube );
    
    camera.position.z = 5;
    
    const animate = () => {
      requestAnimationFrame( animate );
    
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      line.rotation.x += 0.01;
      line.rotation.y += this.spinSpeed;
    
      renderer.render( scene, camera );
    };
    
    animate();
  }

  grantAccess() {
    console.log('child granted')
    this.access.emit(true)
  }
}
