import { useRef } from 'react';
import { useHelper } from '@react-three/drei';
import { DirectionalLightHelper } from 'three';

export default function DirectionalLight({ ...props }) {
  const lightRef = useRef();
  const lightHelper = DirectionalLightHelper;
  useHelper(lightRef, lightHelper);

  return <directionalLight castShadow ref={lightRef} {...props} />;
}
