import Cube from '../components/Cube';

const CUBES = [
  {
    _id: 1,
    color: 0xff0000,
    x: 0,
  },
  {
    _id: 2,
    color: 0x00ff00,
    x: -2,
  },
  {
    _id: 3,
    color: 0x0000ff,
    x: 2,
  },
];

export default function Scene() {
  return (
    <group position-y={1} rotation-y={1} scale-y={1}>
      {CUBES.map(({ _id, color, x }) => (
        <Cube color={color} key={_id} position-x={x} />
      ))}
    </group>
  );
}
