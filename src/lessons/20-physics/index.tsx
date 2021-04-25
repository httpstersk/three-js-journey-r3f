import { Physics } from '@react-three/cannon';
import { button, useControls } from 'leva';
import { useState } from 'react';
import Plane from './components/Plane';
import Sphere from './components/Sphere';
import { AmbientLight, DirectionalLight } from './lights/';

export default function Scene() {
  const [spheresCount, addSphereToScene] = useState(1);

  useControls('Create Sphere', {
    Create: button(() => addSphereToScene((count) => count + 1)),
  });

  return (
    <>
      <AmbientLight intensity={0.7} />
      <DirectionalLight
        intensity={0.2}
        position={[5, 5, 5]}
        shadow-camera-bottom={-7}
        shadow-camera-left={-7}
        shadow-camera-right={7}
        shadow-camera-top={7}
        shadow-camera-far={15}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-radius={1}
      />

      <Physics
        defaultContactMaterial={{
          friction: 0.1,
          restitution: 0.7,
        }}
      >
        {[...Array(spheresCount)].map((_, i) => (
          <Sphere key={i} />
        ))}
        <Plane />
      </Physics>
    </>
  );
}
