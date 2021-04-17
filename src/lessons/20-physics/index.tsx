import { Plane, Sphere } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { AmbientLight, DirectionalLight } from './lights/';

const PLANE_SIZE = 20;
const SPHERE_SIZE = 1;

export default function Scene() {
  const sphereRef = useRef<Mesh>();

  useFrame(({ clock }) => {});

  return (
    <>
      <AmbientLight intensity={0.7} />
      <DirectionalLight
        intensity={0.2}
        position={[5, 5, 5]}
        shadow-camera-bottom={-7}
        shadow-camera-left={-7}
        shadow-camera-right={7}
        shadow-camera-top={7}
        shadow-camera-far={15}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-radius={1}
      />

      <group>
        <Sphere args={[SPHERE_SIZE, 20, 20]} castShadow ref={sphereRef}>
          <meshStandardMaterial metalness={0.3} roughness={0.4} />
        </Sphere>

        <Plane
          args={[PLANE_SIZE, PLANE_SIZE]}
          receiveShadow
          rotation-x={-Math.PI * 0.5}
          position-y={-SPHERE_SIZE}
        >
          <meshStandardMaterial
            color={0x777777}
            metalness={0.3}
            roughness={0.4}
          />
        </Plane>
      </group>
    </>
  );
}
