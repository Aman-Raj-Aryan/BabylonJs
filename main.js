import * as BABYLON from 'babylonjs'



// Get the canvas DOM element
var canvas = document.getElementById('renderCanvas');
// Load the 3D engine
var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});
// CreateScene function that creates and return the scene
var createScene = function(){

 var scene = new BABYLON.Scene(engine);

var camera = new BABYLON.ArcRotateCamera('cam' , 1 , 1 , 20 , new BABYLON.Vector3.Zero() , scene);

 camera.setTarget(BABYLON.Vector3.Zero());
         camera.attachControl(true)             
 var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
 var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene, false, BABYLON.Mesh.FRONTSIDE);
                                    
       sphere.position.y = 1;
                                                     
var ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap('ground' , 'assets/hm.png' , {
        width : 10,
        height : 10,
        subdivisions : 20,



})

                                                             
  return scene;
     }
                                                                    
         var scene = createScene();
                                                               
 engine.runRenderLoop(function(){
        scene.render();
                                                                            });
                                                                            // the canvas/window resize event handler
 window.addEventListener('resize', function(){
                                                           engine.resize();
                    });










  
























