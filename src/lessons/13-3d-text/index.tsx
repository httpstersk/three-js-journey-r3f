import { useMemo } from 'react';
import { Center, PerspectiveCamera, useTexture } from '@react-three/drei';
import { useResource, useLoader, MeshProps } from 'react-three-fiber';
import { FontLoader, MeshStandardMaterial, Texture } from 'three';

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

export default function Scene() {
  const material = useResource<MeshStandardMaterial>();
  const matcap = useTexture('/textures/matcaps/8.png') as Texture;

  return (
    <>
      <mesh>
        <meshMatcapMaterial ref={material} matcap={matcap} />
        {material.current && <Text material={material.current}>Good</Text>}
      </mesh>

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
