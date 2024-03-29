import { Plane, Sphere, Torus, useCubeTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Group, Mesh, MeshStandardMaterial } from 'three';

const LIGHT_COLOR = 0xffffff;
const LIGHT_INTESITY = 1;

export default function Scene() {
  const groupRef = useRef<Group>();
  const meshRef = useRef<Mesh>();
  const [material, materialRef] = useState<MeshStandardMaterial>();

  const envMap = useCubeTexture(
    ['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'],
    { path: process.env.PUBLIC_URL + '/textures/environmentMaps/0/' }
  );

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
        <meshStandardMaterial
          envMap={envMap}
          metalness={1}
          ref={materialRef}
          roughness={0}
        />

        {material && (
          <group ref={groupRef}>
            <Sphere
              args={[0.5, 64, 64]}
              material={material}
              position={[-1.5, 0, 0]}
            />

            <Plane args={[1, 1, 100, 100]} material={material} ref={meshRef} />

            <Torus
              args={[0.3, 0.2, 64, 128]}
              material={material}
              position={[1.5, 0, 0]}
            />
          </group>
        )}
      </mesh>

      <ambientLight color={LIGHT_COLOR} intensity={LIGHT_INTESITY} />

      <pointLight
        color={LIGHT_COLOR}
        intensity={LIGHT_INTESITY}
        position={[2, 3, 4]}
      />
    </>
  );
}
