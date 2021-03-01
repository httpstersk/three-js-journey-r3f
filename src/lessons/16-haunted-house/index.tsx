import { PerspectiveCamera } from '@react-three/drei';
import { useEffect } from 'react';
import { useThree } from 'react-three-fiber';
import { Fog } from 'three';
import Floor from './components/Floor';
import Graves from './components/Graves';
import House from './components/House';
import { AmbientLight, DoorLight, MoonLight } from './lights';

const FOG_COLOR = 0x262837;

export default function Scene() {
  const { scene, gl } = useThree();

  useEffect(() => {
    scene.fog = new Fog(FOG_COLOR, 1, 15);
  }, [scene]);

  useEffect(() => {
    gl.setClearColor(FOG_COLOR);
  }, [gl]);

  return (
    <>
      <AmbientLight color={0xb9d5ff} intensity={0.12} />
      <DoorLight color={0xff7d46} intensity={1} position={[0, 2.2, 2.7]} />
      <MoonLight color={0xb9d5ff} intensity={0.12} position={[4, 5, -2]} />

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
