import { forwardRef } from 'react';
import { Color, PointLight } from 'three';

const Ghosts = forwardRef<PointLight, { color: Color }>(({ color }, ref) => {
  return (
    <pointLight
      args={[color, 2, 3]}
      castShadow
      ref={ref}
      shadow-camera-far={7}
      shadow-mapSize-height={256}
      shadow-mapSize-width={256}
    />
  );
});

export default Ghosts;
