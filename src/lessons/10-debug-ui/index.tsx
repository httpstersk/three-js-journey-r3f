import Cube from 'components/Cube';
import gsap from 'gsap';
import { useControls } from 'leva';
import { useRef } from 'react';
import { Group } from 'three';

export default function Scene() {
  const groupRef = useRef<Group>();

  const { color } = useControls('Tweaks', {
    color: '#ff0000',
    Spin: {
      value: false,
      onChange: () => {
        if (groupRef.current) {
          const { rotation } = groupRef.current;
          gsap.to(rotation, { duration: 1, y: rotation.y + Math.PI * 2 });
        }
      },
    },
  });

  return (
    <group ref={groupRef}>
      <Cube color={color} />
    </group>
  );
}
