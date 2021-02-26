import Grave from './Grave';

const GRAVES_COUNT = 50;

export default function Graves({ ...props }) {
  return (
    <group>
      {[...Array(GRAVES_COUNT)].map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const radius = 3 + Math.random() * 6;
        const posX = Math.cos(angle) * radius;
        const posZ = Math.sin(angle) * radius;
        const rotY = (Math.random() - 0.5) * 0.4;
        const rotZ = (Math.random() - 0.5) * 0.4;

        return (
          <Grave position={[posX, 0.3, posZ]} rotation={[0, rotY, rotZ]} />
        );
      })}
    </group>
  );
}
