import React from "react";
import { usePlane } from "@react-three/cannon";

const Plane = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[60, 60]} />
      <meshLambertMaterial attach="material" color="pink" />
    </mesh>
  );
};

export default Plane;
