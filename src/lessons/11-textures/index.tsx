import { useRef } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { Group, PerspectiveCamera as PerspectiveCameraType } from 'three';
import CubeWithTexture from 'components/CubeWithTexture';

export default function Scene() {
  const cameraRef = useRef<PerspectiveCameraType>();
  const groupRef = useRef<Group>();

  return (
    <group ref={groupRef}>
      <CubeWithTexture />

      <PerspectiveCamera
        aspect={2}
        far={100}
        fov={75}
        makeDefault
        near={0.1}
        position={[2, 2, 2]}
        ref={cameraRef}
      />
    </group>
  );
}
