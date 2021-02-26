import { useEffect, useRef } from 'react';
import { BufferAttribute, BufferGeometry } from 'three';

export default function Scene() {
  const geometry = useRef<BufferGeometry>();
  const COUNT = 50;
  const VERTICES = 3;
  const VERTEX_SIZE = 3;
  const length = COUNT * VERTICES * VERTEX_SIZE;

  useEffect(() => {
    const arr = new Float32Array(length);
    [...Array(length)].map((_, i) => (arr[i] = Math.random() - 0.5));

    if (geometry.current) {
      geometry.current.setAttribute(
        'position',
        new BufferAttribute(arr, VERTEX_SIZE)
      );
    }
  }, [length]);

  return (
    <mesh>
      <bufferGeometry ref={geometry} />
      <meshBasicMaterial color={0xff0000} wireframe />
    </mesh>
  );
}
