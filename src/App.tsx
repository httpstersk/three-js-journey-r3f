import { Route } from 'wouter';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import BasicScene from 'lessons/03-basic-scene';
import TransformObjects from 'lessons/05-transforms-objects';
import Animations from 'lessons/06-animations';
import Aside from 'components/Aside';
import LessonLink from 'components/LessonLink';

import 'App.css';

function App() {
  return (
    <main>
      <Aside>
        <nav>
          <LessonLink href="/lessons/03-basic-scene">Basic Scene</LessonLink>
          <LessonLink href="/lessons/05-transforms-objects">
            Transforms Objects
          </LessonLink>
          <LessonLink href="/lessons/06-animations">Animations</LessonLink>
        </nav>
      </Aside>

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
