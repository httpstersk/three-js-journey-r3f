import { useRef } from 'react';

export default function MoonLight({ ...props }) {
  const lightRef = useRef();
  return (
    <directionalLight
      castShadow
      shadow-camera-far={15}
      shadow-mapSize-height={256}
      shadow-mapSize-width={256}
      ref={lightRef}
      {...props}
    />
  );
}
