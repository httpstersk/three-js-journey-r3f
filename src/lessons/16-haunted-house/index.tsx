import { AmbientLight } from './lights';
import Floor from './components/Floor';
import Graves from './components/Graves';
import House from './components/House';

export default function Scene() {
  return (
    <>
      <AmbientLight color={0xb9d5ff} intensity={1} />
      <House />
      <Graves />
      <Floor />
    </>
  );
}
