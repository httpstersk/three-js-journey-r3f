import { useMemo } from 'react';

const Sphere = ({ ...props }) => {
  const radius = useMemo(() => Math.random(), []);

  return (
    <mesh castShadow>
      <sphereBufferGeometry args={[radius, 20, 20]} />
      <meshStandardMaterial metalness={0.3} roughness={0.4} />
    </mesh>
  );
};

export default Sphere;
