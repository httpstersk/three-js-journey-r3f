import { useSphere } from '@react-three/cannon';
import { useCubeTexture } from '@react-three/drei';
import React from 'react';

export const SPHERE_SIZE = 1;

const Sphere: React.FC = (props) => {
  const envMap = useCubeTexture(
    ['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'],
    { path: process.env.PUBLIC_URL + '/textures/environmentMaps/0/' }
  );

  const [ref] = useSphere(() => ({
    mass: 1,
    position: [(Math.random() - 0.5) * 3, 5, (Math.random() - 0.5) * 3],
    ...props,
  }));

  return (
    <mesh ref={ref} castShadow>
      <sphereBufferGeometry args={[SPHERE_SIZE, 20, 20]} />
      <meshStandardMaterial envMap={envMap} metalness={0.3} roughness={0.4} />
    </mesh>
  );
};

export default Sphere;
