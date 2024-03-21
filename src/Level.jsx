import * as THREE from "three";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

function BlockStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <mesh
        position={[0, -0.1, 0]}
        receiveShadow
        geometry={boxGeometry}
        scale={[4, 0.2, 4]}
      >
        <meshStandardMaterial color="limegreen" />
      </mesh>
    </group>
  );
}

export default function Level() {
  return (
    <>
      <BlockStart position={[0, 0, 0]} />
    </>
  );
}
