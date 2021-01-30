import { useEffect, useRef } from 'react';
import { Group } from 'three';
import gsap from 'gsap';
import Cube from 'components/Cube';

export default function Scene() {
  const groupRef = useRef<Group>();

  useEffect(() => {
    if (groupRef.current) {
      gsap.to(groupRef.current.position, {
        delay: 0,
        duration: 1,
        x: 1,
        ease: 'power2.in',
      });
    }
  }, [groupRef]);

  return (
    <group ref={groupRef}>
      <Cube color={0xff0000} />
    </group>
  );
}
