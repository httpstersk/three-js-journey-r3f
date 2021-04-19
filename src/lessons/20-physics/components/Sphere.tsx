import { useSphere } from '@react-three/cannon';
import { useCubeTexture } from '@react-three/drei';

const Sphere = ({ ...props }) => {
  const { radius } = props;
  const envMap = useCubeTexture(
    ['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'],
    { path: process.env.PUBLIC_URL + '/textures/environmentMaps/0/' }
  );

  const [ref] = useSphere(() => ({
    mass: 1,
    position: [(Math.random() - 0.5) * 3, 3, (Math.random() - 0.5) * 3],
    radius,
    ...props,
  }));

  return (
    <mesh ref={ref} castShadow>
      <sphereBufferGeometry args={[radius, 20, 20]} />
      <meshStandardMaterial envMap={envMap} metalness={0.3} roughness={0.4} />
    </mesh>
  );
};

export default Sphere;
