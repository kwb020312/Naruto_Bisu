import { useGLTF } from "@react-three/drei";

const Naruto = () => {
  const naruto = useGLTF("./naruto/scene.gltf");
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
        object={naruto.scene}
        scale={0.5}
        position={[18, -2, -25]}
        rotation={[0, 12, 0]}
      />
    </mesh>
  );
};

export default Naruto;
