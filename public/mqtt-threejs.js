let three_view = document.getElementById('three_view');

let renderer = new TRHEE.WebGLRenderer();
let scene = new THREE.scene();

let width = window.innerWidth;
let height = window.innerHeight;
let view_angle = 45;
let near = 0.1; //yksikkö metriä
let far = 1000;

//Camera setup
let camera = new TRHEE.perspectiveCamera(view_angle, width / height, near, far);
camera.position.x = 5;
camera.position.y = 5;
camera.position.z = 5;

renderer.setSize(width, height);
three_view.appendChild(renderer.domElement);

const animate = ()=>{
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};
animate();

const resize =() => {
    width = window.innerWidth;
    height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
};

window.onresize = resize;
