import { Route } from 'wouter';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import BasicScene from 'lessons/03-basic-scene';
import TransformObjects from 'lessons/05-transforms-objects';
import Animations from 'lessons/06-animations';
import Cameras from 'lessons/07-cameras';
import Geometries from 'lessons/09-geometries';
import Aside from 'components/Aside';
import LessonLink from 'components/LessonLink';
import Navigation from 'components/Navigation';

import 'App.css';

function App() {
  return (
    <main>
      <Aside>
        <Navigation>
          <LessonLink href="/lessons/03-basic-scene">Basic Scene</LessonLink>
          <LessonLink href="/lessons/05-transforms-objects">
            Transforms Objects
          </LessonLink>
          <LessonLink href="/lessons/06-animations">Animations</LessonLink>
          <LessonLink href="/lessons/07-cameras">Cameras</LessonLink>
          <LessonLink href="/lessons/09-geometries">Geometries</LessonLink>
        </Navigation>
      </Aside>

      <Canvas>
        <Route path="/lessons/03-basic-scene" component={BasicScene} />
        <Route
          path="/lessons/05-transforms-objects"
          component={TransformObjects}
        />
        <Route path="/lessons/06-animations" component={Animations} />
        <Route path="/lessons/07-cameras" component={Cameras} />
        <Route path="/lessons/09-geometries" component={Geometries} />

        <OrbitControls />
      </Canvas>
    </main>
  );
}

export default App;
