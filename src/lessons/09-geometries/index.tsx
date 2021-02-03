import { useRef } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import {
  PerspectiveCamera as PerspectiveCameraType,
  BufferGeometry,
} from 'three';

export default function Scene() {
  const geometry = useRef<BufferGeometry>();
  const camera = useRef<PerspectiveCameraType>();

  return (
    <>
      <bufferGeometry ref={geometry} />

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
