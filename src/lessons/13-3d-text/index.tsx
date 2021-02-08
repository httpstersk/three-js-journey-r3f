import { useMemo, useRef } from 'react';
import { Center, PerspectiveCamera } from '@react-three/drei';
import { useResource, useLoader, MeshProps } from 'react-three-fiber';
import { FontLoader, Mesh, MeshStandardMaterial } from 'three';

const Text: React.FC<Pick<MeshProps, 'material'>> = ({
  children,
  material,
}) => {
  const font = useLoader(
    FontLoader,
    process.env.PUBLIC_URL + '/fonts/helvetiker.typeface.json'
  );

  const config = useMemo(
    () => ({
      font,
      size: 0.5,
      height: 0.2,
      curveSegments: 4,
      bevelEnabled: true,
      bevelOffset: 0,
      bevelSegments: 5,
      bevelSize: 0.02,
      bevelThickness: 0.03,
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
  return (
    <>
      <Text>Three.js</Text>

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
