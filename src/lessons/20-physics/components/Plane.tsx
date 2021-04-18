import { usePlane } from '@react-three/cannon';
import React from 'react';
import { SPHERE_SIZE } from './Sphere';

export const PLANE_SIZE = 20;

const Plane: React.FC = (props) => {
  const [ref] = usePlane(() => ({
    mass: 0,
    position: [0, -SPHERE_SIZE, 0],
    rotation: [-Math.PI * 0.5, 0, 0],
    ...props,
  }));

  return (
    <mesh ref={ref} castShadow>
      <planeBufferGeometry args={[PLANE_SIZE, PLANE_SIZE]} />
      <meshStandardMaterial color={0x777777} metalness={0.3} roughness={0.4} />
    </mesh>
  );
};

export default Plane;
