import { useRef } from 'react';
import { useFrame, useResource } from 'react-three-fiber';
import { Plane, Sphere, useTexture } from '@react-three/drei';
import { Mesh, MeshBasicMaterial, MeshStandardMaterial } from 'three';
import {
  DirectionalLightWithHelper,
  PointLightWithHelper,
  SpotLightWithHelper,
} from './lights/';
import { useTweaks } from 'use-tweaks';
import { Texture } from 'three';

const PLANE_SIZE = 5;
const SPHERE_SIZE = PLANE_SIZE / 10;

export default function Scene() {
  const sphereRef = useRef<Mesh>();
  const sphereShadowRef = useRef<Mesh>();
  const sphereShadowMaterialRef = useRef<MeshBasicMaterial>();
  const material = useResource<MeshStandardMaterial>();
  const simpleShadow = useTexture('/textures/simpleShadow.jpg') as Texture;

  const { metalness, roughness } = useTweaks('Material', {
    metalness: { value: 0, min: 0, max: 1 },
    roughness: { value: 0.5, min: 0, max: 1 },
  });

  useFrame(({ clock }) => {
    if (
      sphereRef.current &&
      sphereShadowRef.current &&
      sphereShadowMaterialRef.current
    ) {
      const elapsedTime = clock.getElapsedTime();
      const sphere = sphereRef.current;
      const shadow = sphereShadowRef.current;

      sphere.position.x = shadow.position.x = Math.cos(elapsedTime) * 1.5;
      sphere.position.z = shadow.position.z = Math.sin(elapsedTime) * 1.5;
      sphere.position.y = Math.abs(Math.sin(elapsedTime * 3));

      sphereShadowMaterialRef.current.opacity = (1 - sphere.position.y) * 0.3;
    }
  });

  return (
    <>
      <DirectionalLightWithHelper />
      <SpotLightWithHelper />
      <PointLightWithHelper />

      <meshStandardMaterial
        metalness={metalness}
        ref={material}
        roughness={roughness}
      />

      {material.current && (
        <group>
          <Sphere
            args={[SPHERE_SIZE, 32, 32]}
            castShadow
            material={material.current}
            ref={sphereRef}
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

      <Plane
        args={[1.5, 1.5]}
        receiveShadow
        ref={sphereShadowRef}
        rotation-x={-Math.PI * 0.5}
        position-y={-SPHERE_SIZE + 0.01}
      >
        <meshBasicMaterial
          color={0x000000}
          alphaMap={simpleShadow}
          ref={sphereShadowMaterialRef}
          transparent={true}
        />
      </Plane>
    </>
  );
}
