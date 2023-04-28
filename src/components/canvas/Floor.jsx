import { useGLTF } from "@react-three/drei";

const Floor = () => {
  const floor = useGLTF("./stage/scene.gltf");
  return (
    <mesh>
      <ambientLight />
      <primitive
        object={floor.scene}
        scale={10}
        position={[-190, -85, 405]}
        rotation={[0, 9, 0]}
      />
    </mesh>
  );
};

export default Floor;
