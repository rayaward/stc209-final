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

//---------------------------------------------------------------------------------------------------------------------
  
function addSphere() {
    var sphereGeometry = new THREE.SphereGeometry(1.5, 20, 20);
    var matProps = {
        specular: '#a9fcff',
        emissive: '#006063',
        shininess: 10
    }
    var sphereMaterial = new THREE.MeshPhongMaterial(matProps);
    var sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphereMesh.castShadow = true;
    sphereMesh.position.y = 0.75 * Math.PI / 2;
    sphereMesh.name = 'sphere';
    return sphereMesh;
}

function makeBlueSphere(x, y, z) {
    var sphereGeometry = new THREE.SphereGeometry(.5);
    var matProps = {
        specular: '#a9fcff',
        color: '#acbed8',
        emissive: '#acbed8',
        shininess: 10
    }

    var sphereMaterial = new THREE.MeshPhongMaterial(matProps);
    var sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphereMesh.castShadow = true;
    sphereMesh.position.x = (x % 50) - 20 + (Math.random() * 60);
    sphereMesh.position.y = (y % 20) - 10 + (Math.random() * 40);
    sphereMesh.position.z = (z % 20) - 30 + (Math.random() * 60);
    sphereMesh.name = 'sphere';
    return sphereMesh;
}

function makeWhiteSphere(x, y, z) {
    var sphereGeometry = new THREE.SphereGeometry(.5);
    var matProps = {
        specular: '#a9fcff',
        color: '#e8ebf7',
        emissive: '#e8ebf7',
        shininess: 10
    }

    var sphereMaterial = new THREE.MeshPhongMaterial(matProps);
    var sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphereMesh.castShadow = true;
    sphereMesh.position.x = (x % 50) - 20 + (Math.random() * 60);
    sphereMesh.position.y = (y % 20) - 10 + (Math.random() * 40);
    sphereMesh.position.z = (z % 20) - 30 + (Math.random() * 60);
    sphereMesh.name = 'sphere';
    return sphereMesh;
}

function makeRedSphere(x, y, z) {
    var sphereGeometry = new THREE.SphereGeometry(.5);
    var matProps = {
        specular: '#a9fcff',
        color: '#de1a1a',
        emissive: '#de1a1a',
        shininess: 10
    }

    var sphereMaterial = new THREE.MeshPhongMaterial(matProps);
    var sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphereMesh.castShadow = true;
    sphereMesh.position.x = (x % 50) - 20 + (Math.random() * 60);
    sphereMesh.position.y = (y % 20) - 10 + (Math.random() * 40);
    sphereMesh.position.z = (z % 20) - 30 + (Math.random() * 60);
    sphereMesh.name = 'sphere';
    return sphereMesh;
}

function makeYellowSphere(x, y, z) {
    var sphereGeometry = new THREE.SphereGeometry(.5);
    var matProps = {
        specular: '#a9fcff',
        color: '#f2d398',
        emissive: '#f2d398',
        shininess: 10
    }

    var sphereMaterial = new THREE.MeshPhongMaterial(matProps);
    var sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphereMesh.castShadow = true;
    sphereMesh.position.x = (x % 50) - 100 + (Math.random() * 120);
    sphereMesh.position.y = (y % 20) - 10 + (Math.random() * 120);
    sphereMesh.position.z = (z % 20) - 60 + (Math.random() * 120);
    sphereMesh.name = 'sphere';
    return sphereMesh;
}

function makeOrangeSphere(x, y, z) {
    var sphereGeometry = new THREE.SphereGeometry(.5);
    var matProps = {
        specular: '#a9fcff',
        color: '#d78521',
        emissive: '#d78521',
        shininess: 10
    }

    var sphereMaterial = new THREE.MeshPhongMaterial(matProps);
    var sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphereMesh.castShadow = true;
    sphereMesh.position.x = (x % 50) - 20 + (Math.random() * 80);
    sphereMesh.position.y = (y % 20) - 10 + (Math.random() * 40);
    sphereMesh.position.z = (z % 20) - 30 + (Math.random() * 60);
    sphereMesh.name = 'sphere';
    return sphereMesh;
}


function makeTable() {
    var cubeGeometry = new THREE.BoxGeometry(6, .25, 4);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xf2d398});
    var cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh.castShadow = true;
    cubeMesh.receiveShadow = true;
    cubeMesh.position.set(-.38, 3.5, -4.75);

    for (i = 0; i < 4; i++) {
        var tableLeg = new THREE.CylinderGeometry(.15, .10, 3);
        var legMaterial = new THREE.MeshLambertMaterial({color: 0xf2d398});
        var legMesh = new THREE.Mesh(tableLeg, legMaterial);
        if (i == 0) {
            legMesh.position.x = -3.1;
            legMesh.position.y = 1.88;
            legMesh.position.z = -3.00;
        }
        if (i == 1) {
            legMesh.position.x = 2.415;
            legMesh.position.y = 1.88;
            legMesh.position.z = -3.00;
        }
        if (i == 2) {
            legMesh.position.x = 2.415;
            legMesh.position.y = 1.88;
            legMesh.position.z = -6.5;
        }
        if (i == 3) {
            legMesh.position.x = -3.1;
            legMesh.position.y = 1.88;
            legMesh.position.z = -6.5;
        }

        scene.add(legMesh);

    }

    var vase =  new THREE.CylinderGeometry(.8, .5, 1.5);
    var vaseMaterial = new THREE.MeshLambertMaterial({color: 0xacbed8});
    var vase = new THREE.Mesh(vase, vaseMaterial);
    vase.position.y += 1;
    vase.position.x += .5; 
    cubeMesh.add(vase);


    return cubeMesh;
}

function getPainting() {
    var cubeGeometry = new THREE.BoxGeometry(10, 8, .1);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xd78521});
    var cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh.position.set(-8, 10, -15);
    return cubeMesh; 
}

function getPlane() {
        // A mesh is created from the geometry and material, then added to the scene
        var plane = new THREE.PlaneGeometry(30,30);
        var material = new THREE.MeshLambertMaterial({ color: 0xe8ebf7, side: THREE.DoubleSide});
        var PlaneMesh = new THREE.Mesh(plane, material);
        return PlaneMesh;
    }

//---------------------------------------------------------------------------------------------------------------------

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

    scene.position.x = -50;
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
    var audioLoader = new THREE.AudioLoader();
    audioLoader.load( './media/audio.m4a', function( buffer ) {
    //audioLoader.load( 'https://drive.google.com/file/d/1l-DLbSz-EH2kip9qxX9ARiGZQJKQ-GZY/view?usp=sharing', function( buffer ) {
        audio.setBuffer( buffer );
        audio.setLoop( true );
        audio.setVolume( 5.0);
        audio.play();
        audio.detune = 4; 
    });
    analyser = new THREE.AudioAnalyser( audio, 32 );

    list2 = new THREE.AudioListener();
    audio2 = new THREE.Audio( list2 );
    var audioLoader2 = new THREE.AudioLoader();
    audioLoader2.load( './media/ford. - sirens.mp3', function( buffer ) {
    //audioLoader.load( 'https://drive.google.com/file/d/1l-DLbSz-EH2kip9qxX9ARiGZQJKQ-GZY/view?usp=sharing', function( buffer ) {
        audio2.setBuffer( buffer );
        audio2.setLoop( true );
        audio2.setVolume( 0.05 );
        audio2.play();
    });

    
    // add elements
    var table = makeTable();
    scene.add( table );

    var plane = getPlane();
    plane.rotation.x = Math.PI/2;
    scene.add( plane );

    var wallHanging = getPainting();
    scene.add(wallHanging);

    scene.add(addSphere()); 
    var sphere2 = addSphere();
    sphere2.position.x = 3; 
    
    // add the output of the renderer to the html element
    document.body.appendChild(renderer.domElement);

    // control object
    control = new function () {
        this.rotSpeed = 0.005;
        this.scale = 1;
    };
    // addControls(control);

    // call the render function
    render();
}

//------------------------------------------------------------------------------------------------------------------

function getLow(arr) {
    return (arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);
}

function getMid(arr) {
    return (arr[5] + arr[6] + arr[7] + arr[8] + arr[9] + arr[10]);
}

function getHigh(arr) {
    return (arr[11] + arr[12] + arr[13] + arr[14] + arr[15]);
}

function getAll(arr) {
    var sum = 0;
    var i;  
    for (i = 0; i < 16; i++) {
        sum += arr[i];
    }
    return sum; 
}


// function addControls(controlObject) {
//     var gui = new dat.GUI();
//     gui.add(controlObject, 'rotSpeed', -0.1, 0.1);
// }

function render() {
    renderer.render(scene, camera);
    var x = camera.position.x;
    var z = camera.position.z;
    camera.position.x = x * Math.cos(control.rotSpeed) + z * Math.sin(control.rotSpeed);
    camera.position.z = z * Math.cos(control.rotSpeed) - x * Math.sin(control.rotSpeed);
    camera.lookAt(scene.position);

    let freqData = analyser.getFrequencyData();
    var sum = getAll(freqData);
    var x = getLow(freqData);
    var y = getMid(freqData);
    var z = getHigh(freqData);

    //var avg = analyser.getAverageFrequency(); 
    var value = Math.floor(Math.random() * 5) + 1 ;

    // make sphere in color according to average value 
    if (value == 1) scene.add(makeWhiteSphere(x, y , z));    
    if (value == 2) scene.add(makeBlueSphere(x, y , z)); 
    if (value == 3) scene.add(makeYellowSphere(x, y , z)); 
    if (value == 4) scene.add(makeOrangeSphere(x, y , z)); 
    if (value == 5) scene.add(makeRedSphere(x, y , z)); 

    requestAnimationFrame(render);
}

// calls the init function when the window is done loading.
//window.onload = init;
