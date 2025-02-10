import * as THREE from 'three';

//Scene
const scene = new THREE.scene();

//create our sphere
const geometry = new THREE.SphereGeometry(3, 64, 64)
const material = new THREE.MeshStandardMaterial({
  color: "#00ff83",
  
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)


//camera
const camera = new THREE.PerspectiveCamera(45, 800, 600)
scene.add(camera)