import { useRef } from 'react';
import { useResource } from 'react-three-fiber';
import { Plane, Sphere } from '@react-three/drei';
import { Group, MeshStandardMaterial } from 'three';
import { DirectionalLightWithHelper } from 'components/lights/';

const PLANE_SIZE = 5;
const SPHERE_SIZE = PLANE_SIZE / 10;

export default function Scene() {
  const groupRef = useRef<Group>();
  const material = useResource<MeshStandardMaterial>();

  return (
    <>
      <DirectionalLightWithHelper />

      <meshStandardMaterial ref={material} roughness={0.4} />

      {material.current && (
        <group ref={groupRef}>
          <Sphere
            args={[SPHERE_SIZE, 32, 32]}
            castShadow
            material={material.current}
          />

          <Plane
            args={[PLANE_SIZE, PLANE_SIZE]}
            material={material.current}
            receiveShadow
            rotation-x={-Math.PI * 0.5}
            position-y={-SPHERE_SIZE}
          />
        </group>
      )}
    </>
  );
}
