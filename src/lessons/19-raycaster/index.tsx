import { Sphere } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame, useResource } from 'react-three-fiber';
import { Group, Mesh, MeshStandardMaterial } from 'three';

export default function Scene() {
  const groupRef = useRef<Group>();
  const meshRef = useRef<Mesh>();
  const material = useResource<MeshStandardMaterial>();

  useFrame((_, delta) => {
    if (groupRef.current && meshRef.current) {
      const groupRotation = groupRef.current.rotation;
      const meshRotation = meshRef.current.rotation;
      meshRotation.x = groupRotation.x = groupRotation.y += 0.15 * delta;
    }
  });

  return (
    <>
      <mesh>
        <meshBasicMaterial color={0xff0000} ref={material} />

        {material.current && (
          <group ref={groupRef}>
            <Sphere
              args={[0.5, 16, 16]}
              material={material.current}
              position-x={-2}
            />

            <Sphere
              args={[0.5, 16, 16]}
              material={material.current}
              position-x={0}
            />

            <Sphere
              args={[0.5, 16, 16]}
              material={material.current}
              position-x={2}
            />
          </group>
        )}
      </mesh>
    </>
  );
}
