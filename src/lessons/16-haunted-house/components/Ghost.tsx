import { forwardRef } from 'react';
import { Color, PointLight } from 'three';

const Ghosts = forwardRef<PointLight, { color: Color }>(({ color }, ref) => {
  return <pointLight castShadow args={[color, 2, 3]} ref={ref} />;
});

export default Ghosts;
