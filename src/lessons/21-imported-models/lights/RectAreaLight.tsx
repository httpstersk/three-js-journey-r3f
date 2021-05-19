import { useRef } from 'react';

export default function RectAreaLight({ ...props }) {
  const lightRef = useRef();
  return <rectAreaLight castShadow ref={lightRef} {...props} />;
}
