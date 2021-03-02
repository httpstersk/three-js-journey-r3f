import { forwardRef } from 'react';
import { PointLight } from 'three';

const Ghost = forwardRef<PointLight, { color: string }>(({ color }, ref) => {
  return <pointLight castShadow args={[color, 2, 3]} ref={ref} />;
});

export default Ghost;
