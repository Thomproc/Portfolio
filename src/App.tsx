import style from "./App.module.css";
import { Canvas } from "@react-three/fiber";
import RubiksCubeComponent from "./components/RubiksCube";
function App() {
  return (
    <Canvas className={style["canvas"]}>
      <axesHelper args={[5]} />
      <ambientLight intensity={1.5} />
      <RubiksCubeComponent />
    </Canvas>
  );
}

export default App;
