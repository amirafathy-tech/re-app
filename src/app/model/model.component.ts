// import { Component, ElementRef, OnInit, ViewChild,AfterViewInit,Input } from '@angular/core';
//  import * as THREE from 'three';
// // import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// @Component({
//   selector: 'app-model',
//   templateUrl: './model.component.html',
//   styleUrls: ['./model.component.css']
// })

// export class ModelComponent implements OnInit {
//   // @ViewChild('canvas')
//   // private canvasRef: ElementRef;
//   // // cube properties
//   // @Input() public rotationSpeedX: number=0.05;
//   // @Input() public rotationSpeedY: number=0.01;
//   // @Input() public size: number=200;
//   // @Input() public texture: string="/map.glb";

//   // @ViewChild('canvasContainer', { static: true }) canvasContainer: ElementRef;

//   // ngOnInit() {
//   //   this.setupModelViewer();
//   // }

//   // setupModelViewer() {
//   //   // Create a scene, camera, and renderer using Three.js
//   //   const scene = new THREE.Scene();
//   //   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//   //   const renderer = new THREE.WebGLRenderer({ antialias: true });
//   //   renderer.setSize(window.innerWidth, window.innerHeight);

//   //   // Append the renderer's canvas to the component's view child element
//   //   this.canvasContainer.nativeElement.appendChild(renderer.domElement);

//   //   // Add controls to enable orbiting around the model
//   //   const controls = new OrbitControls(camera, renderer.domElement);

//   //   // Load the 3D model using the GLTFLoader from Three.js
//   //   const loader = new GLTFLoader();
//   //   loader.load('map.glb', (gltf) => {
//   //     scene.add(gltf.scene);

//   //     // Set up any additional properties or configurations for the loaded model
//   //     // For example, you can set the position, scale, or rotation of the model here.

//   //     // Start the render loop
//   //     animate();
//   //   });

//   //   // Render loop function
//   //   function animate() {
//   //     requestAnimationFrame(animate);
//   //     renderer.render(scene, camera);
//   //   }
//   // }
// }
