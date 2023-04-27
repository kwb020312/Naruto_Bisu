import { useGLTF } from "@react-three/drei";

const Naruto = () => {
  const naruto = useGLTF("./naruto/scene.gltf");
  return (
    <mesh>
      <primitive object={naruto.scene} scale={1} />
    </mesh>
  );
};

export default Naruto;
