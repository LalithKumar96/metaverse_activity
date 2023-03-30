import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  PresentationControls,
  Shadow,
  View,
  useAnimations,
  OrbitControls,
} from "@react-three/drei";
import { useEffect } from "react";

const Model1 = () => {
  const model = useGLTF("/avatar1.glb");
  const { actions } = useAnimations(model.animations, model.scene);
  console.log(model.scene.position);
  model.scene.position.y = -1;
  useEffect(() => {
    actions?.Idle?.play();
  });
  return <primitive object={model.scene} />;
};
const Model2 = () => {
  const model = useGLTF("/avatar_test.gltf");
  const { actions } = useAnimations(model.animations, model.scene);
  // console.log(model);
  useEffect(() => {
    actions?.Idle?.play();
  });
  return <primitive object={model.scene} />;
};
const Model3 = () => {
  const model = useGLTF("/avatar3.glb");
  const { actions } = useAnimations(model.animations, model.scene);
  // console.log(model);
  useEffect(() => {
    actions?.Idle?.play();
  });
  return <primitive object={model.scene} />;
};
const Model4 = () => {
  const model = useGLTF("/avatar4.glb");
  const { actions } = useAnimations(model.animations, model.scene);
  // console.log(model);

  useEffect(() => {
    actions?.Idle?.play();
  });
  return <primitive object={model.scene} />;
};

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //   </header>
    // </div>

    <>
      <div style={{ display: "flex" }}>
        {/* <div style={{"display" :"grid", "gridTemplateColumns":"2fr 1fr 1fr 1fr 1fr","height" :"100vh"}}> */}
        <div
          style={{ height: "100vh", width: "30vw", border: "1px solid black" }}
        >
          <p>Question hello hello hello </p>
        </div>

        <div
          style={{
            height: "10vh",
            width: "70vw",
            border: "1px solid black",
            position: "absolute",
            left: "25%",
            zIndex: 1,
          }}
        >
          <p>check </p>
        </div>

        {/* <div style={{ border: "1px solid black" }}> */}
        <div>
          <Canvas
            dpr={[1, 2]}
            orthographic
            shadows
            camera={{ zoom: 140, position: [0, 0, 1] }}
          >
            <ambientLight intensity={1} />
            <directionalLight position={[2, 5, 0]} intensity={1} />

            <color attach={"background"} args={["#ffffff"]} />
            {/* <PresentationControls
              speed={1.5}
              global
              zoom={0.5}
              polar={[-0.1, Math.PI / 4]}
            >
              <Stage environment={null}>
                <Model1 scale={1} />
              </Stage>
            </PresentationControls> */}
            <Model1 scale={1} position={[0, 0, 0]} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              dampingFactor={0.05}
              minPolarAngle={0.9}
              maxPolarAngle={Math.PI / 2}
              // minPolarAngle={Math.PI / 3}
              // maxPolarAngle={Math.PI / 3}
            />
          </Canvas>
        </div>

        <div>
          <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
            <color attach={"background"} args={["#ffffff"]} />
            <PresentationControls
              speed={1.5}
              global
              zoom={0.5}
              polar={[-0.1, Math.PI / 4]}
            >
              <Stage environment={null}>
                <Model2 scale={1} />
              </Stage>
            </PresentationControls>
          </Canvas>
        </div>
        <div>
          <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
            <color attach={"background"} args={["#ffffff"]} />
            <PresentationControls
              speed={1.5}
              global
              zoom={0.5}
              polar={[-0.1, Math.PI / 4]}
            >
              <Stage environment={null}>
                <Model3 scale={1} />
              </Stage>
            </PresentationControls>
          </Canvas>
        </div>
        <div>
          <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
            <color attach={"background"} args={["#ffffff"]} />
            <PresentationControls
              speed={1.5}
              global
              zoom={0.5}
              polar={[-0.1, Math.PI / 4]}
            >
              <Stage environment={null}>
                <Model4 scale={1} />
              </Stage>
            </PresentationControls>
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default App;
