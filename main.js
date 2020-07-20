var camera, scene, renderer, i=2;
			var mesh;

			init();
            animate();
            loadModel();
            loadModel2();

			function init() {

				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
                camera.position.z = 600;

				scene = new THREE.Scene();

				var texture = new THREE.TextureLoader().load( 'texures/bone tile.jpg' );
				var geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
                var material = new THREE.MeshBasicMaterial( { map: texture } );
                
				mesh = new THREE.Mesh( geometry, material );
				scene.add( mesh );

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
			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				renderer.setSize( window.innerWidth, window.innerHeight );
				camera.updateProjectionMatrix();

			}
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
            }
			function animate() {

				requestAnimationFrame( animate );

				mesh.rotation.x += 0.005;
				mesh.rotation.y += 0.01;

				renderer.render( scene, camera );

			}
