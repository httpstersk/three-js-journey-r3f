import Cube from 'components/Cube';
import PerspectiveCamera from './PerspectiveCamera';

export default function Scene() {
  return (
    <group>
      <Cube color={0xff0000} />
      <PerspectiveCamera />
    </group>
  );
}
