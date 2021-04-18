import { Physics } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import Plane from './components/Plane';
import Sphere from './components/Sphere';
import { AmbientLight, DirectionalLight } from './lights/';

export default function Scene() {
  useFrame(({ clock }) => {});

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

      <Physics>
        <Sphere />
        <Plane />
      </Physics>
    </>
  );
}
