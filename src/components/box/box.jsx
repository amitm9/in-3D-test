import React, { useState } from "react";
import { Html, Text } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Modal from "../modal/modal";
const Box = ({ character, z }) => {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 2, z] }));
  const texture = new TextureLoader().load(character.url); // box image

  const [showModal, setShowModal] = useState(false); //show modal
  const [selectedBox, setSelectedBox] = useState();

  const handleBoxClick = () => {
    setSelectedBox(character);
    let toggle = !showModal;
    setShowModal(toggle);
  };
  const handleModalClick=()=>{
    setShowModal(false);
  }

  return (
    <group>
      <mesh position={[0, 2, z]}>
        <Text scale={[5, 5, 5]} color="white" anchorX="center" anchorY="middle" fontSize="0.1">
          {character.name}
        </Text>
      </mesh>
      <mesh ref={ref} position={[0, 1, 0]} onClick={handleBoxClick}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" map={texture} />
      </mesh>
      <Html>
     {showModal && <Modal character={selectedBox} modalClick={handleModalClick}/>}
        </Html>
    </group>
  );
};

export default Box;

