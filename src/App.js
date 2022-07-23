import './style.css';

// import {init} from './utils/initDroneLayer.js';
import React, { Suspense, useEffect } from 'react';
import {Canvas} from "@react-three/fiber"
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Html,
} from "@react-three/drei";
import { Ground } from "./Ground";
import { Controller } from "./Controller";

import HTMLcontent from './components/HTMLcontent';
import Navbar from '../src/components/Navbar/Navbar'




function ControllerAnim(){
  return (
    <>
      {/* <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45}/> */}
      <PerspectiveCamera makeDefault fov={50} position={[0, 2, 5]} />

      <color args={[1, 0.2,0]} attach="background" />

      {/* <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            
          </>
        )}
      </CubeCamera> */}
      <Controller />

      

      <spotLight
        color={[1, 1, 1]}  
        // color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={1}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-10, 5, 15]}
        castShadow
        shadow-bias={-0.0001}
      />
      {/* <Ground     /> */}

    </>
  )
}




function App() {
  return (

    <Suspense fallback={null}>
      <Canvas>
        <ControllerAnim/>
      </Canvas>
      <Suspense>
        <Navbar/>
        <HTMLcontent/>
      </Suspense>
    </Suspense>
   
  );
}

export default App;
