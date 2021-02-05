import { useRef } from 'react';
import { makeButton, useTweaks } from 'use-tweaks';
import { PerspectiveCamera } from '@react-three/drei';
import { Group, PerspectiveCamera as PerspectiveCameraType } from 'three';
import gsap from 'gsap';
import Cube from 'components/Cube';

export default function Scene() {
  const cameraRef = useRef<PerspectiveCameraType>();
  const groupRef = useRef<Group>();

  const { color } = useTweaks('Tweaks', {
    color: '#ff0000',
    ...makeButton('Spin', () => {
      if (groupRef.current) {
        const { rotation } = groupRef.current;
        gsap.to(rotation, { duration: 1, y: rotation.y + Math.PI * 2 });
      }
    }),
  });

  return (
    <>
      <group ref={groupRef}>
        <Cube color={color} />
      </group>

      <PerspectiveCamera
        aspect={2}
        far={100}
        fov={75}
        makeDefault
        near={0.1}
        position={[2, 2, 2]}
        ref={cameraRef}
      />
    </>
  );
}
