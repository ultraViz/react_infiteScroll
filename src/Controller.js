import React, { useEffect } from "react";
import { 
    // useFrame,
     useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import gsap from 'gsap'

// Model Credit:
// by "dil_afroze" (https://free3d.com/3d-model/xbox-one-controller-295065.html)

//https://sketchfab.com/AHarmlessPotato
//https://sketchfab.com/3d-models/playstation-5-dualsense-878c1f882808477ab81c2fe86d5a3936

export function Controller() {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/controller/ps4Controller.gltf"
  );
  
  useEffect(() => {
    gltf.scene.scale.set(5, 5, 5);
    gltf.scene.position.set(0, 2, 0);
    gltf.scene.rotation.set(0, 3.2, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  let scaleXYZ =  15


  gsap.to(gltf.scene.scale,{
    x:scaleXYZ, 
    y:scaleXYZ,   
    z:scaleXYZ,
    duration:1,
    ease: 'power2.in',
  });

  gsap.to(gltf.scene.position,{
    x:-3.4,
    y:1.5,
    duration:1,
    ease: 'power2.in',
  });

  gsap.to(gltf.scene.rotation,{
    y:-1.5,
    delay:1,
    duration:1,
  })

  gsap.to(gltf.scene.position,{
    x:-0, 
    y:1,
    duration:1,
    delay:5,
    ease: 'power2.in',
  });
  gsap.to(gltf.scene.rotation,{
    y:3.2,
    delay:6,
    duration:1,
  })

  gsap.to(gltf.scene.rotation,{
    x:-1.2,
    z:-0.1,
    delay:11,
    duration:1,
  })



  return <primitive object={gltf.scene} />;
}