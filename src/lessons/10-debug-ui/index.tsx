import { useRef } from 'react';
import { useTweaks } from 'use-tweaks';
import { PerspectiveCamera } from '@react-three/drei';
import { PerspectiveCamera as PerspectiveCameraType } from 'three';
import Cube from 'components/Cube';

export default function Scene() {
  const camera = useRef<PerspectiveCameraType>();
  const { color } = useTweaks('Color', {
    color: '#ff0000',
  });

  return (
    <>
      <Cube color={color} />

      <PerspectiveCamera
        aspect={2}
        far={100}
        fov={75}
        makeDefault
        near={0.1}
        position={[2, 2, 2]}
        ref={camera}
      />
    </>
  );
}
