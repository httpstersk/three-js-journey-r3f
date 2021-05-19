import { useEffect, useRef } from 'react';
import { useHelper } from '@react-three/drei';
import { SpotLightHelper, Object3D } from 'three';

export default function SpotLight({ ...props }) {
  const lightRef = useRef();
  const targetRef = useRef<Object3D>();

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.position.x = -0.75;
    }
  }, []);

  useHelper(lightRef, SpotLightHelper);

  return (
    <group ref={targetRef}>
      <spotLight castShadow ref={lightRef} {...props} />
    </group>
  );
}
