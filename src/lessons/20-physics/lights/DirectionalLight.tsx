import { useRef } from 'react';

export default function DirectionalLight({ ...props }) {
  const lightRef = useRef();
  return <directionalLight castShadow ref={lightRef} {...props} />;
}
