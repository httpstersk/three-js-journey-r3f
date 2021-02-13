import { useRef } from 'react';
import { Group } from 'three';
import CubeWithTexture from 'components/CubeWithTexture';

export default function Scene() {
  const groupRef = useRef<Group>();

  return (
    <group ref={groupRef}>
      <CubeWithTexture />
    </group>
  );
}
