import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Naruto from "./components/canvas/Naruto";
import Floor from "./components/canvas/Floor";

function App() {
  return (
    <div className="h-[100vh]">
      <Canvas shadows>
        <Suspense fallback={null}>
          <OrbitControls />
          <Naruto />
          <Floor />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
