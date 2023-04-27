import { useGLTF } from "@react-three/drei";

const Floor = () => {
  const floor = useGLTF("./stage/scene.gltf");
  return (
    <mesh>
      <spotLight
        position={[5, 5, 25]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={floor.scene}
        scale={1}
        position={[0, -2, 0]}
        rotation={[0, 9, 0]}
      />
    </mesh>
  );
};

export default Floor;
