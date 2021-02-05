import { Route } from 'wouter';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';

import BasicScene from 'lessons/03-basic-scene';
import TransformObjects from 'lessons/05-transforms-objects';
import Animations from 'lessons/06-animations';
import Cameras from 'lessons/07-cameras';
import Geometries from 'lessons/09-geometries';
import DebugUI from 'lessons/10-debug-ui';

import Aside from 'components/Aside';
import LessonLink from 'components/LessonLink';
import Navigation from 'components/Navigation';

import 'App.css';

const LESSONS_FOLDER = '/lessons';
const LESSONS = [
  {
    title: 'Basic Scene',
    path: `${LESSONS_FOLDER}/03-basic-scene`,
    component: BasicScene,
  },
  {
    title: 'Transforms Objects',
    path: `${LESSONS_FOLDER}/05-transforms-objects`,
    component: TransformObjects,
  },
  {
    title: 'Animations',
    path: `${LESSONS_FOLDER}/06-animations`,
    component: Animations,
  },
  {
    title: 'Cameras',
    path: `${LESSONS_FOLDER}/07-cameras`,
    component: Cameras,
  },
  {
    title: 'Geometries',
    path: `${LESSONS_FOLDER}/09-geometries`,
    component: Geometries,
  },
  {
    title: 'Debug UI',
    path: `${LESSONS_FOLDER}/10-debug-ui`,
    component: DebugUI,
  },
];



function App() {
  return (
    <main>
      <Aside>
        <Navigation>
          {LESSONS.map(({ path, title }) => (
            <LessonLink href={path} key={path}>
              {title}
            </LessonLink>
          ))}
        </Navigation>
      </Aside>

      <Canvas>
        {LESSONS.map(({ component, path }) => (
          <Route component={component} key={path} path={path} />
        ))}

        <OrbitControls />
      </Canvas>
    </main>
  );
}

export default App;
