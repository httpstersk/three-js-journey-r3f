import { Suspense } from 'react';
import { Route } from 'wouter';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { PCFSoftShadowMap } from 'three';

import BasicScene from 'lessons/03-basic-scene';
import TransformObjects from 'lessons/05-transforms-objects';
import Animations from 'lessons/06-animations';
import Cameras from 'lessons/07-cameras';
import Geometries from 'lessons/09-geometries';
import DebugUI from 'lessons/10-debug-ui';
import Textures from 'lessons/11-textures';
import Materials from 'lessons/12-materials';
import Text3D from 'lessons/13-3d-text';
import Lights from 'lessons/14-lights';
import Shadows from 'lessons/15-shadows';

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
  {
    title: 'Textures',
    path: `${LESSONS_FOLDER}/11-textures`,
    component: Textures,
  },
  {
    title: 'Materials',
    path: `${LESSONS_FOLDER}/12-materials`,
    component: Materials,
  },
  {
    title: '3D Text',
    path: `${LESSONS_FOLDER}/13-3d-text`,
    component: Text3D,
  },
  {
    title: 'Lights',
    path: `${LESSONS_FOLDER}/14-lights`,
    component: Lights,
  },
  {
    title: 'Shadows',
    path: `${LESSONS_FOLDER}/15-shadows`,
    component: Shadows,
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

      <Canvas
        colorManagement={false}
        camera={{
          aspect: 2,
          far: 100,
          fov: 75,
          near: 0.1,
          position: [1, 1, 2],
        }}
        shadowMap={{
          enabled: false,
          type: PCFSoftShadowMap,
        }}
      >
        <Suspense fallback={null}>
          {LESSONS.map(({ component, path }) => (
            <Route component={component} key={path} path={path} />
          ))}
        </Suspense>

        <OrbitControls />
      </Canvas>
    </main>
  );
}

export default App;
