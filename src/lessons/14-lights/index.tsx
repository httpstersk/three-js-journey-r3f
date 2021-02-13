import React, { useMemo } from 'react';
import { Center, useTexture } from '@react-three/drei';
import { useResource, useLoader, MeshProps } from 'react-three-fiber';
import {
  FontLoader,
  MeshStandardMaterial,
  Texture,
  TorusBufferGeometry,
} from 'three';

const Text: React.FC<Pick<MeshProps, 'material'>> = ({
  children,
  material,
}) => {
  const font = useLoader(FontLoader, '/fonts/helvetiker.typeface.json');

  const config = useMemo(
    () => ({
      font,
      size: 0.5,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 5,
    }),
    [font]
  );

  return (
    <Center>
      <mesh material={material}>
        <textGeometry args={[String(children), config]} />
      </mesh>
    </Center>
  );
};

interface DonutsProps {
  material: MeshStandardMaterial;
}

const DONUTS_COUNT = 100;

const torus = new TorusBufferGeometry(0.3, 0.2, 20, 45);

const Donuts: React.FC<DonutsProps> = ({ material }) => {
  return (
    <>
      {[...Array(DONUTS_COUNT)].map((_, i) => {
        const scale = Math.random();

        return (
          <mesh
            geometry={torus}
            key={i}
            material={material}
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
            ]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
            scale={[scale, scale, scale]}
          ></mesh>
        );
      })}
    </>
  );
};

export default function Scene() {
  const material = useResource<MeshStandardMaterial>();
  const matcap = useTexture('/textures/matcaps/8.png') as Texture;

  return (
    <mesh>
      <meshMatcapMaterial ref={material} matcap={matcap} />
      {material.current && (
        <group>
          <Donuts material={material.current} />
          <Text material={material.current}>Good</Text>
        </group>
      )}
    </mesh>
  );
}
