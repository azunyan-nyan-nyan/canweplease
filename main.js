var camera, scene, renderer, i=2;
			var mesh;

			init();
			animate();
            //loadModel();
            //loadModel2();

			function init() {

				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
                
			camera.position.y=-1;
			camera.position.x=-1;
			camera.position.z=-1;

				scene = new THREE.Scene();

				cube();
				renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
                renderer.setClearColor(0x000000,0);
                document.body.appendChild( renderer.domElement );
				controls = new THREE.OrbitControls(camera,renderer.domElement);

				window.addEventListener( 'resize', onWindowResize, false );
                renderer.render(scene, camera);
                
                var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 2 );

                 light.position.set(1,1,1);
   				 scene.add(light);
			}
			function cube() {

				var i, n=0, m=0, h=0, e=3;
				for(f=0;f<=4;f++){
                for(i=0;i<=4;i++){
					var texture = new THREE.TextureLoader().load( 'texures/weerd.jpg' );
					var geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
					var material = new THREE.MeshBasicMaterial( { map: texture } );
					if(i!=0){
						h = 1 + m;
					}
					if(f!=0)
					{
						h = 1 + m;
					}
					cube[h] = new THREE.Mesh( geometry, material );
					scene.add( cube[h] );
					cube[h].position.x = i*e;
					cube[h].position.z = f*e;
					for(n=1;n<=4;n++){
						var texture = new THREE.TextureLoader().load( 'texures/weerd.jpg' );
						var geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
						var material = new THREE.MeshBasicMaterial( { map: texture } );
						m = h + n;
						cube[m] = new THREE.Mesh( geometry, material );
						scene.add( cube[m] );
							cube[m].position.y = n*e;
							cube[m].position.x = i*e;
							cube[m].position.z = f*e;
						}
						n--;
					}
				}
		}
			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				renderer.setSize( window.innerWidth, window.innerHeight );
				camera.updateProjectionMatrix();

			}/*
            function loadModel(){
                var loader = new THREE.OBJLoader();
                loader.load('uh/horse 1.obj', function (object){
					object.position.y=200;
					
                    scene.add(object);
                })
            }
            function loadModel2(){
                var loader = new THREE.OBJLoader();
                loader.load('uh/horse 1 copy.obj', function (object){
					object.position.y=-300;
					
                    scene.add(object);
                })
			}*/
			function animate() {
			
				requestAnimationFrame( animate );
				renderer.render( scene, camera );

			}
