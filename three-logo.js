const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(45,1,0.1,1000);
camera.position.z=5;

const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});
renderer.setSize(200,200);
document.getElementById("logo3d").appendChild(renderer.domElement);

scene.add(new THREE.AmbientLight(0x00f7ff,1));

const cube=new THREE.Mesh(
  new THREE.BoxGeometry(2.5,1.6,0.6),
  new THREE.MeshStandardMaterial({
    color:0x3b82f6,
    emissive:0x00f7ff
  })
);
scene.add(cube);

function animate(){
  requestAnimationFrame(animate);
  cube.rotation.y+=0.01;
  renderer.render(scene,camera);
}
animate();