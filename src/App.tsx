import { Link, Route } from 'wouter';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import BasicScene from './lessons/03-basic-scene';
import TransformObjects from './lessons/05-transforms-objects';
import Animations from './lessons/06-animations';

import './App.css';

function App() {
  return (
    <main>
      <nav>
        <Link href="/lessons/03-basic-scene">Basic Scene</Link>
        <Link href="/lessons/05-transforms-objects">Transforms Objects</Link>
        <Link href="/lessons/06-animations">Animations</Link>
      </nav>

      <Canvas>
        <Route path="/lessons/03-basic-scene" component={BasicScene} />
        <Route
          path="/lessons/05-transforms-objects"
          component={TransformObjects}
        />
        <Route path="/lessons/06-animations" component={Animations} />

        <OrbitControls />
      </Canvas>
    </main>
  );
}

export default App;
