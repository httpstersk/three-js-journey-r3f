import { Box } from '@react-three/drei';
import { useRef } from 'react';
import { Group } from 'three';

export const WALLS_HEIGHT = 2.5;

export default function Grave({ ...props }) {
  const graveRef = useRef<Group>();

  return (
    <Box args={[0.6, 0.8, 0.2]} castShadow ref={graveRef} {...props}>
      <meshStandardMaterial color={0xb2b6b1} />
    </Box>
  );
}
