import { PerspectiveCamera } from '@react-three/drei';
import Floor from './components/Floor';
import Graves from './components/Graves';
import House from './components/House';
import { AmbientLight, MoonLight } from './lights';

export default function Scene() {
  return (
    <>
      <AmbientLight color={0xb9d5ff} intensity={1} />
      <MoonLight position={[4, 5, -2]} />

      <House />
      <Graves />
      <Floor />

      <PerspectiveCamera
        aspect={1}
        far={100}
        fov={75}
        makeDefault
        near={0.1}
        position={[4, 2, 5]}
      />
    </>
  );
}
