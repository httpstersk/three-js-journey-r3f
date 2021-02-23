import { Cone } from '@react-three/drei';
import { useRef } from 'react';
import { Group } from 'three';
import { WALLS_HEIGHT } from './House';

const ROOF_SIZE = 3.5;
const ROOF_HEIGHT = 1;
const ROOF_SIDES = 4;

export default function Roof() {
  const roofRef = useRef<Group>();

  return (
    <Cone
      args={[ROOF_SIZE, ROOF_HEIGHT, ROOF_SIDES]}
      castShadow
      ref={roofRef}
      position-y={WALLS_HEIGHT + ROOF_HEIGHT / 2}
    >
      <meshStandardMaterial color={0xb35f45} />
    </Cone>
  );
}
