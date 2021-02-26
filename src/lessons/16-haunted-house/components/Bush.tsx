import { Sphere } from '@react-three/drei';
import { useRef } from 'react';
import { SphereBufferGeometry } from 'three';

const SEGMENTS = 16;

export default function Bush({ ...props }) {
  const bushRef = useRef<SphereBufferGeometry>();

  return (
    <Sphere args={[1, SEGMENTS, SEGMENTS]} castShadow ref={bushRef} {...props}>
      <meshStandardMaterial color={0x89c854} />
    </Sphere>
  );
}
