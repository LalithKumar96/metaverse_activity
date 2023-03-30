import logo from './logo.svg';
import './App.css';
import {Canvas} from "@react-three/fiber";
import {useGLTF,Stage , PresentationControls, Shadow ,View, useAnimations} from "@react-three/drei";
import { useEffect } from 'react';

const Model1 = () =>{
  const model = useGLTF("/avatar1.glb");
  const {actions} = useAnimations(model.animations,model.scene);
  console.log(model)
  useEffect(()=>{
    actions?.Idle?.play();
  })
  return <primitive object={model.scene}/>
}
const Model2 = () =>{
  const model = useGLTF("/avatar_test.gltf");
  const {actions} = useAnimations(model.animations,model.scene);
  console.log(model)
  useEffect(()=>{
    actions?.Idle?.play();
  })
  return <primitive object={model.scene}/>
}
const Model3 = () =>{
  const model = useGLTF("/avatar3.glb");
  const {actions} = useAnimations(model.animations,model.scene);
  console.log(model)
  useEffect(()=>{
    actions?.Idle?.play();
  })
  return <primitive object={model.scene}/>
}
const Model4 = () =>{
  const model = useGLTF("/avatar4.glb");
  const {actions} = useAnimations(model.animations,model.scene);
  console.log(model)
  useEffect(()=>{
    actions?.Idle?.play();
  })
  return <primitive object={model.scene}/>
}


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //   </header>
    // </div>
    <div style={{"display" :"grid", "gridTemplateColumns":"2fr 1fr 1fr 1fr 1fr","height" :"100vh"}}>
    <div style={{"height" : "30vw"}} >
      <p>Question hello hello hello </p>
    </div>

    <div>
      <Canvas dpr={[1,2]} shadows camera={{fov:45}}  >
        <color attach={"background"} args={["#ffffff"]} />
        <PresentationControls speed={1.5} global zoom ={.5} polar={[-0.1, Math.PI /4]}>
          <Stage environment={null}>
            <Model1 scale={1}/>
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
    <div>
      <Canvas dpr={[1,2]} shadows camera={{fov:45}}  >
        <color attach={"background"} args={["#ffffff"]} />
        <PresentationControls speed={1.5} global zoom ={.5} polar={[-0.1, Math.PI /4]}>
          <Stage environment={null}>
            <Model2 scale={1}/>
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
    <div>
      <Canvas dpr={[1,2]} shadows camera={{fov:45}}  >
        <color attach={"background"} args={["#ffffff"]} />
        <PresentationControls speed={1.5} global zoom ={.5} polar={[-0.1, Math.PI /4]}>
          <Stage environment={null}>
            <Model3 scale={1}/>
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
    <div>
      <Canvas dpr={[1,2]} shadows camera={{fov:45}}  >
        <color attach={"background"} args={["#ffffff"]} />
        <PresentationControls speed={1.5} global zoom ={.5} polar={[-0.1, Math.PI /4]}>
          <Stage environment={null}>
            <Model4 scale={1}/>
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
    </div>
  

  );
}

export default App;
