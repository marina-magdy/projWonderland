import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
import {OBJLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/OBJLoader.js';
import {MTLLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/MTLLoader.js';

function main() {
  var loadingManager = null;
  var counter=0;
  var RESOURCES_LOADED = false;
  var ctx = new AudioContext();
  var audio = document.getElementById('player');
  audio.play();
  audio.volume = 1;
  //audio.crossOrigin = "anonymous";
  
  var audioSrc = ctx.createMediaElementSource(audio);
  var analyser = ctx.createAnalyser();
  // var btn = document.getElementById('btn');
  // document.body.appendChild(btn);
  // btn.addEventListener( 'mousedown', restart);
  let button = document.querySelector("button");
  button.style.position='absolute';
  button.style.top = 70 + 'px';
   button.style.left = 300 + 'px';
   button.style.width = 100 + 'px' ;
   button.style.height = 50+ 'px';
    button.innerHTML = "RESTART";
  button.addEventListener("mousedown", event => {
    restart();
  });
  audioSrc.connect(analyser);
  audioSrc.connect(ctx.destination);
 var text2 = document.createElement('div');
   text2.style.position = 'absolute';
text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
   text2.style.width = 100 + 'px' ;
text2.style.height = 50+ 'px';
   text2.style.backgroundColor = "red";
   //text2.style.backgroundSize= 2000 ;
   text2.innerHTML = "Score ="+counter;
   text2.style.fontFamily='Arial, Helvetica, sans-serif';
   text2.style.fontWeight='bold';
   text2.style.fontSize=8000;
   text2.style.color="white";
   text2.style.top = 30 + 'px';
   text2.style.left = 300 + 'px';
   var text1 = document.createElement('div');
   text1.style.position = 'absolute';
   text1.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
   text1.style.width = 200 + 'px' ;
   text1.style.height = 100+ 'px';
   text1.style.backgroundColor = "white";
   //text2.style.backgroundSize= 2000 ;
   text1.innerHTML = "Use ARROWS TO MOVE RIGHT , LEFT, FRONT OR BACK \n USE U TO MOVE UP AND D TO MOVE DOWN";
   text1.style.fontFamily='Arial, Helvetica, sans-serif';
   text1.style.fontWeight='bold';
   text1.style.fontSize=8000;
   text1.style.color="red";
   text1.style.top = 70 + 'px';
   text1.style.right = 350 + 'px';
   document.body.appendChild(text1);
   var text3 = document.createElement('div');
   text3.style.position = 'absolute';
  text3.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
   text3.style.width = 100 + 'px' ;
text3.style.height = 50+ 'px';
   text3.style.backgroundColor = "yellow";
   //text2.style.backgroundSize= 2000 ;
   text3.innerHTML = "YOU WON! :)";
   text3.style.fontFamily='Arial, Cooper Black Std, sans-serif';
   text3.style.fontWeight='bold';
   text3.style.fontSize=8000;
   text3.style.color="black";
   text3.style.top = 30 + 'px';
   text3.style.left = 80 + 'px';
document.body.appendChild(text2);
function restart(){
  if(scene.getObjectByName('boy')!=null){
    scene.remove(meshes["boy"]);}
  
  if(scene.getObjectByName('boy2')!=null){
      scene.remove(meshes["boy2"]);}
  if(scene.getObjectByName('toy')!=null){
        scene.remove(meshes["toy"]);}
  if(scene.getObjectByName('toy2')!=null){
          scene.remove(meshes["toy2"]);}
  if(scene.getObjectByName('among')!=null){
            scene.remove(meshes["among"]);}
  if(scene.getObjectByName('among2')!=null){
   scene.remove(meshes["among2"]);}
  if(scene.getObjectByName('horse')!=null){
                scene.remove(meshes["horse"]);}
  if(scene.getObjectByName("horse2")!=null){
                  scene.remove(meshes["horse2"]);}
  if(scene.getObjectByName("train")!=null){
                 scene.remove(meshes["train"]);}
  if(scene.getObjectByName('train2')!=null){
                  scene.remove(meshes["train2"]);}
  if(scene.getObjectByName('elephant')!=null){
    scene.remove(meshes["elephant"]);}
  if(scene.getObjectByName("roller")!=null){
                  scene.remove(meshes["roller"]);}
  if(scene.getObjectByName("claw")!=null){
                    scene.remove(meshes["claw"]);}
  if(scene.getObjectByName("carousel")!=null){
                      scene.remove(meshes["carousel"]);}
  onResourcesLoaded();
  counter=0;
  text2.innerHTML = "Score ="+counter;
  document.body.removeChild(text3);
 
}
  
  // frequencyBinCount tells you how many values you'll receive from the analyser
  var frequencyData = new Uint8Array(24);
  analyser.getByteFrequencyData(frequencyData);
  analyser.fftSize = 64;
  
  console.log(audioSrc);
  console.log(audioSrc.context.currentTime);
  console.log(frequencyData);
  console.log(analyser);
  console.log(analyser.fftSize); // 2048 by default
  console.log(analyser.frequencyBinCount); // will give me 1024 data points
  console.log(analyser.frequencyBinCount); // fftSize/2 = 32 data points
  var mymodels = {
    claw: {
      obj:"myclaw.obj",
      mtl:"myclaw.mtl",
      mesh: null
    },
    elephant: {
      obj:"Eleph.obj",
      mtl:"Eleph.mtl",
      mesh: null
    },
    boy: {
      obj:"bear.obj",
      mtl:"bear.mtl",
      mesh: null
    },
    
    train:{
      obj:"Train.obj",
      mtl:"Train.mtl",
      mesh: null
    },
    among:{
      obj:"among2.obj",
      mtl:"among2.mtl",
      mesh: null
    },  
    carousel:{
      obj:"carousel.obj",
      mtl:"carousel.mtl",
      mesh: null
    },  
    roller:{
      obj:"katr.obj",
      mtl:"katr.mtl",
      mesh: null
    },  
    horse:{
      obj:"horse.obj",
      mtl:"horse.mtl",
      mesh: null
    },  
    
    toy:{
      obj:"CHA.obj",
      mtl:"CHA.mtl",
      mesh: null
    }
  };


  
  // Meshes index
  var meshes = {};
  loadingManager = new THREE.LoadingManager();
	loadingManager.onProgress = function(item, loaded, total){
		console.log(item, loaded, total);
	};
	loadingManager.onLoad = function(){
		console.log("loaded all resources");
		RESOURCES_LOADED = true;
		onResourcesLoaded();
	};
	
	
  for( var _key in mymodels ){
		(function(key){
			
			var mtlLoader = new MTLLoader(loadingManager);
			mtlLoader.load(mymodels[key].mtl, function(materials){
				materials.preload();
				
				var objLoader = new OBJLoader(loadingManager);
				
        objLoader.setMaterials(materials);
       
				objLoader.load(mymodels[key].obj, function(mesh){
					
					mesh.traverse(function(node){
						if( node instanceof THREE.Mesh ){
							if('castShadow' in mymodels[key])
								node.castShadow = mymodels[key].castShadow;
							else
								node.castShadow = true;
							
							if('receiveShadow' in mymodels[key])
								node.receiveShadow = mymodels[key].receiveShadow;
							else
								node.receiveShadow = true;
						}
					});
					mymodels[key].mesh = mesh;
					
				});
			});
    })
		(_key);
	}
	function onResourcesLoaded(){
    var textureLoader = new THREE.TextureLoader(loadingManager);
   
  meshes["claw"] = mymodels.claw.mesh.clone();
  meshes["elephant"] = mymodels.elephant.mesh.clone();
  meshes["boy"] = mymodels.boy.mesh.clone();
  meshes["toy"] = mymodels.toy.mesh.clone();
  meshes["boy2"] = mymodels.boy.mesh.clone();
  meshes["toy2"] = mymodels.toy.mesh.clone();
  meshes["train"] = mymodels.train.mesh.clone();
  meshes["train2"] = mymodels.train.mesh.clone();
  meshes["among"] = mymodels.among.mesh.clone();
  meshes["among2"] = mymodels.among.mesh.clone();
  meshes["carousel"] = mymodels.carousel.mesh.clone();
  meshes["roller"] = mymodels.roller.mesh.clone();
  meshes["horse"] = mymodels.horse.mesh.clone();
  meshes["horse2"] = mymodels.horse.mesh.clone();
  meshes["claw"].position.set(0, 10, 0);
  meshes["claw"].scale.set(30,30,30);
  meshes["claw"].name = 'claw';
  meshes["boy"].position.set(7, 4, 2);
  meshes["boy"].scale.set(1,1,1);
  meshes["boy"].name = 'boy';
  meshes["boy2"].position.set(9, 4, -8);
  meshes["boy2"].scale.set(1,1,1);
  meshes["boy2"].name = 'boy2';
  meshes["toy"].position.set(-2, 2, 4);
  meshes["toy"].scale.set(0.2,0.2,0.2);
  meshes["toy"].name = 'toy';
  meshes["toy2"].position.set(-3, 2, -8);
  meshes["toy2"].scale.set(0.2,0.2,0.2);
  meshes["toy2"].name = 'toy2';
  meshes["train"].position.set(-5, 2, -15);
  meshes["train"].scale.set(3,2,2);
  meshes["train"].name = 'train';
  meshes["train2"].position.set(-25, 2, -15);
  meshes["train2"].scale.set(3,2,2);
  meshes["train2"].name = 'train2';
  meshes["carousel"].scale.set(0.5,0.5,0.5);
  meshes["carousel"].position.set(-13, 3, -25);
  meshes["carousel"].name = 'carousel';
  meshes["elephant"].scale.set(1,1,1);
  meshes["elephant"].position.set(-27, 3, -20);
  meshes["elephant"].name = 'elephant';

  meshes["roller"].scale.set(1,1,1);
  meshes["roller"].position.set(20, 2, -15);
  meshes["roller"].name = 'roller';
  meshes["among"].position.set(-9, 2, 4);
  meshes["among"].scale.set(0.6,0.6,0.6);
  meshes["among"].name = 'among';
  meshes["among2"].position.set(-12, 2, -3);
  meshes["among2"].scale.set(0.6,0.6,0.6);
  meshes["among2"].name = 'among2';
  meshes["horse"].position.set(-10, 2, 7);
  meshes["horse"].scale.set(3,3,3);
  meshes["horse"].name = 'horse';
  meshes["horse2"].position.set(-5, 2, 0);
  meshes["horse2"].scale.set(4,4,4);
  meshes["horse2"].name = 'horse2';
 	scene.add(meshes["claw"]);
  scene.add(meshes["boy"]);
  scene.add(meshes["boy2"]);
  scene.add(meshes["toy"]);
  scene.add(meshes["toy2"]);
  scene.add(meshes["train"]);
  scene.add(meshes["among"]);
  scene.add(meshes["among2"]);
  scene.add(meshes["carousel"]);
  scene.add(meshes["horse"]);
  scene.add(meshes["horse2"]);
  scene.add(meshes["roller"]);
  scene.add(meshes["elephant"]);
  scene.add(meshes["train2"]);
  document.addEventListener( 'keydown', move ); 

    function move(e){
    if (e.keyCode == '39'){
      
      meshes["claw"].position.x=  meshes["claw"].position.x+1;   
      if((meshes["boy"].position.x==meshes["claw"].position.x)){
        if(scene.getObjectByName('boy')!=null){
        scene.remove(meshes["boy"]);
        counter++;
        text2.innerHTML="Score ="+counter;
        if(counter==8){
          document.body.appendChild(text3);
        }
      }}
      if(meshes["among"].position.x==meshes["claw"].position.x){
        if(scene.getObjectByName('among')!=null){
        scene.remove(meshes["among"]);
        counter++;
        text2.innerHTML="Score ="+counter;
        if(counter==8){
          document.body.appendChild(text3);
        }
      }}
      if(meshes["toy"].position.x==meshes["claw"].position.x){
        if(scene.getObjectByName('toy')!=null){
        scene.remove(meshes["toy"]);
        counter++;
        text2.innerHTML="Score ="+counter;
        if(counter==8){
          document.body.appendChild(text3);
        }
      }
      }
      if(meshes["horse"].position.x==meshes["claw"].position.x){
        if(scene.getObjectByName('horse')!=null){
          scene.remove(meshes["horse"]);
          counter++;
          text2.innerHTML="Score ="+counter;
          if(counter==8){
            document.body.appendChild(text3);
          }
        }
       
      }
      if(meshes["horse2"].position.x==meshes["claw"].position.x){
        if(scene.getObjectByName('horse2')!=null){
          scene.remove(meshes["horse2"]);
          counter++;
          text2.innerHTML="Score ="+counter;
          if(counter==8){
            document.body.appendChild(text3);
          }
        }
       
      }
      if(meshes["toy2"].position.x==meshes["claw"].position.x){
        if(scene.getObjectByName('toy2')!=null){
        scene.remove(meshes["toy2"]);
        counter++;
        text2.innerHTML="Score ="+counter;
        if(counter==8){
          document.body.appendChild(text3);
        }
      }
      }
      if((meshes["boy2"].position.x==meshes["claw"].position.x)){
        if(scene.getObjectByName('boy2')!=null){
        scene.remove(meshes["boy2"]);
        counter++;
        text2.innerHTML="Score ="+counter;
        if(counter==8){
          document.body.appendChild(text3);
        }
      }}
      if(meshes["among2"].position.x==meshes["claw"].position.x){
        if(scene.getObjectByName('among2')!=null){
        scene.remove(meshes["among2"]);
        counter++;
        text2.innerHTML="Score ="+counter;
        if(counter==8){
          document.body.appendChild(text3);
        }
      }}
      controls.enabled = false;
    }
    if (e.keyCode == '37'){
      meshes["claw"].position.x=  meshes["claw"].position.x-1;  
      if((meshes["boy"].position.x==meshes["claw"].position.x)){
        if(scene.getObjectByName('boy')!=null){
        scene.remove(meshes["boy"]);
        counter++;
        text2.innerHTML="Score ="+counter;
        if(counter==8){
          document.body.appendChild(text3);
        }
      }}
      if(meshes["among"].position.x==meshes["claw"].position.x){
        if(scene.getObjectByName('among')!=null){
        scene.remove(meshes["among"]);
        counter++;
        text2.innerHTML="Score ="+counter;
        if(counter==8){
          document.body.appendChild(text3);
        }
      }}
      if(meshes["toy"].position.x==meshes["claw"].position.x){
        if(scene.getObjectByName('toy')!=null){
        scene.remove(meshes["toy"]);
        counter++;
        text2.innerHTML="Score ="+counter;
        if(counter==8){
          document.body.appendChild(text3);
        }
      }
      }
      if(meshes["horse"].position.x==meshes["claw"].position.x){
        if(scene.getObjectByName('horse')!=null){
          scene.remove(meshes["horse"]);
          counter++;
          text2.innerHTML="Score ="+counter;
          if(counter==8){
            document.body.appendChild(text3);
          }
        }
       
      }
      if(meshes["horse2"].position.x==meshes["claw"].position.x){
        if(scene.getObjectByName('horse2')!=null){
          scene.remove(meshes["horse2"]);
          counter++;
          text2.innerHTML="Score ="+counter;
          if(counter==8){
            document.body.appendChild(text3);
          }
        }
       
      }
      if(meshes["toy2"].position.x==meshes["claw"].position.x){
        if(scene.getObjectByName('toy2')!=null){
        scene.remove(meshes["toy2"]);
        counter++;
        text2.innerHTML="Score ="+counter;
        if(counter==8){
          document.body.appendChild(text3);
        }}
      }
      if((meshes["boy2"].position.x==meshes["claw"].position.x)){
        if(scene.getObjectByName('boy2')!=null){
        scene.remove(meshes["boy2"]);
        counter++;
        text2.innerHTML="Score ="+counter;
        if(counter==8){
          document.body.appendChild(text3);
        }
      }}
      if(meshes["among2"].position.x==meshes["claw"].position.x){
        if(scene.getObjectByName('among2')!=null){
        scene.remove(meshes["among2"]);
        counter++;
        text2.innerHTML="Score ="+counter;
        if(counter==8){
          document.body.appendChild(text3);
        }
      }} 
      controls.enabled = false;
    }
    if (e.keyCode == '38'){
      meshes["claw"].position.z=  meshes["claw"].position.z-1;   
      controls.enabled = false;
    }
    if (e.keyCode == '40'){
      meshes["claw"].position.z=  meshes["claw"].position.z+1;   
      controls.enabled = false;
    }
    if (e.keyCode == '68'){
      meshes["claw"].position.y=  meshes["claw"].position.y-1;   
      controls.enabled = false;
    }
    if (e.keyCode == '85'){
      meshes["claw"].position.y=  meshes["claw"].position.y+1;   
      controls.enabled = false;
    }
    else {
      controls.enabled = true;
    }
  }  
  
  var mainLoop = () => {
      
      
    requestAnimationFrame(mainLoop)
    renderer.render(scene, camera)
   
    meshes["boy"].rotation.x += Math.PI / 180;
    meshes["boy"].rotation.z += Math.PI / 180;
    
    meshes["boy2"].rotation.x += Math.PI / 180;
    meshes["boy2"].rotation.z += Math.PI / 180;

    meshes["toy"].rotation.x += Math.PI / 180;
    meshes["toy"].rotation.z += Math.PI / 180;

    meshes["toy2"].rotation.x += Math.PI / 180;
    meshes["toy2"].rotation.z += Math.PI / 180;
    
    meshes["among"].rotation.x += Math.PI / 180;
    meshes["among"].rotation.z += Math.PI / 180;

    meshes["among2"].rotation.x += Math.PI / 180;
    meshes["among2"].rotation.z += Math.PI / 180;

    meshes["horse"].rotation.x += Math.PI / 180;
    meshes["horse"].rotation.z += Math.PI / 180;

    meshes["horse2"].rotation.x += Math.PI / 180;
    meshes["horse2"].rotation.z += Math.PI / 180;

   if(meshes["train"].position.x >  25){
    meshes["train"].position.x =-5;
  }  
else{meshes["train"].position.x +=0.2;}
  
  if(meshes["train2"].position.x >  15){
    meshes["train2"].position.x =-5;
  }  
else{meshes["train2"].position.x +=0.2;}
  }
  
  mainLoop()
  }
  //var myobj = ("bear.obj");
  
  const scene = new THREE.Scene();
  //scene.background=  new THREE.Color('black');
  //Load background texture

const loader = new THREE.TextureLoader();
loader.load('wonder.jpg' , function(texture)
            {
             scene.background = texture;  
            });

  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});
  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
 // const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);
  
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();

  //var myobj2=("newduck.obj")
  {
    const planeSize = window.innerWidth;

    const loader = new THREE.TextureLoader();
   
    const basetexture = loader.load('base.jpg');
    
   basetexture.wrapS = THREE.RepeatWrapping;
    basetexture.wrapT = THREE.RepeatWrapping;
    basetexture.magFilter = THREE.NearestFilter;
    const repeats = planeSize / 2;
   
    basetexture.repeat.set(repeats, repeats);

    const planeGeo = new THREE.PlaneBufferGeometry(planeSize, planeSize);
    const planeMat = new THREE.MeshPhongMaterial({
      map: basetexture,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.rotation.x = Math.PI * -.5;
    
    scene.add(mesh);
  }

  {
    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  }

  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 10, 0);
    light.target.position.set(-5, 0, 0);
    scene.add(light);
    scene.add(light.target);
  }
  
   
  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

}
main();