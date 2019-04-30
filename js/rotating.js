// global variables
var renderer;
var scene;
var camera;
var control;
var analyser;
var audio;
var listener;
var mediaElement; 

var MAX_POINTS = 500; 

var startButton = document.getElementById( 'startButton' );
startButton.addEventListener( 'click', init );

function init() {
    // remove overlay
    var overlay = document.getElementById( 'overlay' );
    overlay.remove();

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    scene = new THREE.Scene();
    // create a camera, which defines where we're looking at.
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    // position and point the camera to the center of the scene
    camera.position.x = -30;
    camera.position.y = 30;
    camera.position.z = 13;
    camera.lookAt(scene.position);
    // create a render, sets the background color and the size
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    var ambientLight = new THREE.AmbientLight(0x090909);
    scene.add(ambientLight);
    var spotLight = new THREE.SpotLight();
    spotLight.position.set(10, 80, 30);
    spotLight.castShadow = true;
    scene.add(spotLight);

    // makeSound();
    listener = new THREE.AudioListener();
    audio = new THREE.Audio( listener );
    mediaElement = new Audio('../media/lucky_dragons.mp3');
    mediaElement.loop = true;
    mediaElement.play();
    console.log("Playing2");
    audio.setMediaElementSource( mediaElement );

    analyser = new THREE.AudioAnalyser( audio, 32 );

    // var pointLight = THREE.PointLight(0xffffff, 1.00, 0, 1);
    // // pointLight.position.set (-5.866, 5.490, -3.614);
    // scene.add(pointLight);

    
    // add elements
    var table = getTable();
    scene.add( table );

    var plane = getPlane();
    plane.rotation.x = Math.PI/2;
    scene.add( plane );

    var wallHanging = getPainting();
    scene.add(wallHanging);

    scene.add(addSphere()); 
    var sphere2 = addSphere();
    sphere2.position.x = 3; 
    //3, 8, 2);

    // add the output of the renderer to the html element
    document.body.appendChild(renderer.domElement);

    // control object
    control = new function () {
        this.rotSpeed = 0.005;
        this.scale = 1;
    };
    addControls(control);

    // call the render function
    render();
}


function addControls(controlObject) {
    var gui = new dat.GUI();
    gui.add(controlObject, 'rotSpeed', -0.1, 0.1);
}

function render() {
    renderer.render(scene, camera);
    var x = camera.position.x;
    var z = camera.position.z;
    camera.position.x = x * Math.cos(control.rotSpeed) + z * Math.sin(control.rotSpeed);
    camera.position.z = z * Math.cos(control.rotSpeed) - x * Math.sin(control.rotSpeed);
    camera.lookAt(scene.position);

    console.log(analyser.getAverageFrequency());
    //console.log(analyser.getFrequencyData());

    requestAnimationFrame(render);
}

// calls the init function when the window is done loading.
//window.onload = init;