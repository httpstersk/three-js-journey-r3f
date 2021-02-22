import { AmbientLight } from './lights';
import Floor from './components/Floor';
import House from './components/House';

export default function Scene() {
  return (
    <>
      <AmbientLight color={0xb9d5ff} intensity={1} />
      <House />
      <Floor />
    </>
  );
}
