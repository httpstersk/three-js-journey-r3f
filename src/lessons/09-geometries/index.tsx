import { useEffect, useRef } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import {
  PerspectiveCamera as PerspectiveCameraType,
  BufferAttribute,
  BufferGeometry,
} from 'three';

export default function Scene() {
  const geometry = useRef<BufferGeometry>();
  const camera = useRef<PerspectiveCameraType>();
  const COUNT = 50;
  const VERTICES = 3;
  const VERTEX_SIZE = 3;
  const length = COUNT * VERTICES * VERTEX_SIZE;

  useEffect(() => {
    const arr = new Float32Array(length);

    Array(length)
      .fill({})
      .map((_, i) => (arr[i] = Math.random() - 0.5));

    if (geometry.current) {
      geometry.current.setAttribute(
        'position',
        new BufferAttribute(arr, VERTEX_SIZE)
      );
    }
  }, [length]);

  return (
    <>
      <mesh>
        <bufferGeometry ref={geometry} />
        <meshBasicMaterial color={0xff0000} wireframe />
      </mesh>

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
