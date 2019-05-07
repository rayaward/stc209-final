  
    function addSphere() {
        var sphereGeometry = new THREE.SphereGeometry(1.5, 20, 20);
        var matProps = {
            specular: '#a9fcff',
            color: '#DE1A1A',
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

    function makeSphere(x, y, z) {
        var sphereGeometry = new THREE.SphereGeometry(.5);
        var matProps = {
            specular: '#a9fcff',
            color: '#020305',
            emissive: '#006063',
            shininess: 10
        }

        // create array of colors 
        // white,blue, yellow, orange, red
        //var colorArr = [0xe8ebf7, 0xacbed8, 0xf2d398, 0xd78521, 0xDE1A1A];
        //var value = (avg / 5000) * 5;
        //console.log( 'avg: ' + avg + '/n value: ' + value + '/n');
        //value = Math.round(value);
       // matProps.color = new THREE.Color(colorArr[value]);
        //matProps.assign(Color.prototype, {
           //setHex: colorArr[value]
        //})
    
        var sphereMaterial = new THREE.MeshPhongMaterial(matProps);
        var sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphereMesh.castShadow = true;
        sphereMesh.position.x = (x % 50) - (Math.random() * 40);
        sphereMesh.position.y = (y % 50) - (Math.random() * 40);
        sphereMesh.position.z = (z % 50) - (Math.random() * 40);
        sphereMesh.name = 'sphere';
        return sphereMesh;
    }
    

    function getTable() {
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
