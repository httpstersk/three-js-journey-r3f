import { Box, Plane, Sphere, Torus } from '@react-three/drei';
import { useRef } from 'react';
import { useResource } from 'react-three-fiber';
import { Group, Mesh, MeshStandardMaterial } from 'three';
import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  PointLight,
  RectAreaLight,
  SpotLight,
} from './lights/';

const CUBE_SIZE = 0.75;
const PLANE_SIZE = 5;

export default function Scene() {
  const groupRef = useRef<Group>();
  const meshRef = useRef<Mesh>();
  const material = useResource<MeshStandardMaterial>();

  return (
    <>
      <AmbientLight args={[0xffffff, 0.5]} />

      <DirectionalLight
        color={0x00fffc}
        intensity={0.3}
        position={[1, 0.25, 0]}
      />

      <HemisphereLight args={[0xff0000, 0x0000ff]} intensity={0.3} />

      <PointLight
        color={0xff9000}
        decay={2}
        distance={10}
        intensity={0.5}
        position={[1, -0.5, 1]}
      />

      <RectAreaLight
        color={0x4e00ff}
        height={1}
        intensity={2}
        lookAt={[0, 0, 0]}
        position={[-1.5, 0, 1.5]}
        width={1}
      />

      <SpotLight
        angle={Math.PI * 0.1}
        color={0x78ff00}
        decay={1}
        distance={6}
        intensity={0.5}
        penumbra={0.25}
        position={[0, 2, 3]}
      />

      <meshStandardMaterial ref={material} roughness={0.4} />

      {material.current && (
        <group ref={groupRef}>
          <Sphere
            args={[0.5, 32, 32]}
            material={material.current}
            position={[-1.5, 0, 0]}
          />

          <Box
            args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]}
            material={material.current}
            ref={meshRef}
          />

          <Torus
            args={[0.3, 0.2, 32, 64]}
            material={material.current}
            position={[1.5, 0, 0]}
          />

          <Plane
            args={[PLANE_SIZE, PLANE_SIZE]}
            material={material.current}
            rotation-x={-Math.PI * 0.5}
            position-y={-0.65}
          />
        </group>
      )}
    </>
  );
}
