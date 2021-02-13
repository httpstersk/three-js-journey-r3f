import { useRef } from 'react';
import { makeButton, useTweaks } from 'use-tweaks';
import { Group } from 'three';
import gsap from 'gsap';
import Cube from 'components/Cube';

export default function Scene() {
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
    <group ref={groupRef}>
      <Cube color={color} />
    </group>
  );
}
