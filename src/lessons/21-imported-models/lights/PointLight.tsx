import { useRef } from 'react';
import { useHelper } from '@react-three/drei';
import { PointLightHelper } from 'three';

export default function PointLight({ ...props }) {
  const lightRef = useRef();
  useHelper(lightRef, PointLightHelper);

  return <pointLight ref={lightRef} {...props} />;
}
