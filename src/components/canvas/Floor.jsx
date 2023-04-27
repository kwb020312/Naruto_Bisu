const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeBufferGeometry args={[100, 100]} />
      <meshPhongMaterial color={0xeeeeee} />
    </mesh>
  );
};

export default Floor;
