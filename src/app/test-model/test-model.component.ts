 //import { Component, ElementRef, OnInit, ViewChild,AfterViewInit,Input } from '@angular/core';
 import { Component, ChangeDetectionStrategy } from '@angular/core';

  import * as THREE from 'three';

@Component({
  selector: 'app-test-model',
  templateUrl: './test-model.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

  styleUrl: './test-model.component.css'
})
export class TestModelComponent  {
  public selected = false;
  public readonly glbPath = `map.glb`;


//   private camera =  THREE.PerspectiveCamera;
//   private getCanvas(): HTMLCanvasElement{
//     return this.canvasRef.nativeElement;
//   }

  
//  @ViewChild('canvas')
//  private canvasRef: ElementRef;
//  private cube = THREE.Mesh;
//  private renderer =  THREE.WebGLRenderer;
//  private scene =  THREE.Scene;

//   // cube properties
//    @Input() public rotationSpeedX: number=0.05;
//    @Input() public rotationSpeedY: number=0.01;
//    @Input() public size: number=200;
//    @Input() public texture: string="/map.glb";

//     Scene1() {
//     const gltf = useLoader(GLTFLoader, '/master.glb', (loader) => {
//       loader.manager.onLoad = () => {
//         global.setDisplay(true);
//       };
//     });
  
//     gltf.scene.children.forEach((mesh, i) => {
//       mesh.castShadow = true;
//     });
  
//     gltf.castShadow = true;
//     gltf.scene.castShadow = true;
  
//     return <primitive object={gltf.scene} />;
//   }
  

}
