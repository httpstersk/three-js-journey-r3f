import { useRef } from 'react';
import { useResource } from 'react-three-fiber';
import { Plane, Sphere } from '@react-three/drei';
import { Group, MeshStandardMaterial } from 'three';
import { DirectionalLightWithHelper } from 'components/lights/';
import { useTweaks } from 'use-tweaks';

const PLANE_SIZE = 5;
const SPHERE_SIZE = PLANE_SIZE / 10;

export default function Scene() {
  const groupRef = useRef<Group>();
  const material = useResource<MeshStandardMaterial>();

  const { metalness, roughness } = useTweaks('Material', {
    metalness: { value: 0, min: 0, max: 1 },
    roughness: { value: 0.5, min: 0, max: 1 },
  });

  return (
    <>
      <DirectionalLightWithHelper />

      <meshStandardMaterial
        metalness={metalness}
        ref={material}
        roughness={roughness}
      />

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
