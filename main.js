import * as BABYLON from 'babylonjs'




const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = function () {
  

const scene = new BABYLON.Scene(engine , {antialias : true})


const box = new BABYLON.MeshBuilder.CreateTube('tube' , 
{path : BABYLON.Vector3[
  (0 , 0 , 0),
  (3 ,3 , 3),
  (6, 6 ,6),
  (9, 9 , 9)
  (12 , 12 , 12)
]})


return scene;
}














