import { useRef } from 'react';

export default function DoorLight({ ...props }) {
  const lightRef = useRef();

  return (
    <pointLight
      castShadow
      shadow-camera-far={7}
      shadow-mapSize-height={256}
      shadow-mapSize-width={256}
      ref={lightRef}
      {...props}
    />
  );
}
