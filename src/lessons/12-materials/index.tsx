import { useRef } from 'react';
import { MeshProps, useFrame, useResource } from 'react-three-fiber';
import {
  Plane,
  PerspectiveCamera,
  Sphere,
  Torus,
  useCubeTexture,
} from '@react-three/drei';
import { Mesh, MeshStandardMaterial } from 'three';

const SharedMesh: React.FC<Pick<MeshProps, 'material' | 'position'>> = ({
  children,
  material,
  position,
}) => {
  const ref = useRef<Mesh>();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.15 * delta;
      ref.current.rotation.y += 0.1 * delta;
    }
  });

  return (
    <mesh attach="material" {...{ ref }} {...{ material }} {...{ position }}>
      {children}
    </mesh>
  );
};

const LIGHT_COLOR = 0xffffff;
const LIGHT_INTESITY = 1;

export default function Scene() {
  const material = useResource<MeshStandardMaterial>();
  const envMap = useCubeTexture(
    ['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'],
    { path: process.env.PUBLIC_URL + '/textures/environmentMaps/0/' }
  );

  return (
    <>
      <mesh>
        <meshStandardMaterial
          envMap={envMap}
          metalness={0.5}
          ref={material}
          roughness={0.2}
          attach="material"
        />
        {material.current && (
          <group>
            <SharedMesh material={material.current} position={[-1.5, 0, 0]}>
              <Sphere args={[0.5, 64, 64]} />
            </SharedMesh>
            <SharedMesh material={material.current}>
              <Plane args={[1, 1, 100, 100]} />
            </SharedMesh>
            <SharedMesh material={material.current} position={[1.5, 0, 0]}>
              <Torus args={[0.3, 0.2, 64, 128]} />
            </SharedMesh>
          </group>
        )}
      </mesh>

      <ambientLight color={LIGHT_COLOR} intensity={LIGHT_INTESITY} />

      <pointLight
        color={LIGHT_COLOR}
        intensity={LIGHT_INTESITY}
        position={[2, 3, 4]}
      />

      <PerspectiveCamera
        aspect={2}
        far={100}
        fov={75}
        makeDefault
        near={0.1}
        position={[1, 1, 2]}
      />
    </>
  );
}
