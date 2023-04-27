import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Naruto from "./components/canvas/Naruto";

function App() {
  return (
    <Canvas shadows>
      <Suspense fallback={null}>
        <OrbitControls />
        <Naruto />
      </Suspense>
    </Canvas>
  );
}

export default App;
