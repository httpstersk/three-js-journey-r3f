import { AmbientLight } from './lights';
import Floor from './components/Floor';

export default function Scene() {
  return (
    <>
      <AmbientLight color={0xb9d5ff} intensity={1} />
      <Floor />
    </>
  );
}
