import { useEffect, useRef, useState } from 'react';
import { useHelper } from '@react-three/drei';
import { useThree } from 'react-three-fiber';
import {
  DirectionalLight,
  DirectionalLightHelper,
  CameraHelper,
  Object3D,
  OrthographicCamera,
} from 'three';
import { makeButton, makeFolder, useTweaks } from 'use-tweaks';

export default function DirectionalLightWithHelper() {
  const [isHelperLightOn, toggleLightHelper] = useState(true);
  const [isHelperShadowOn, toggleShadowHelper] = useState(true);

  const {
    color,
    intensity,
    far,
    near,
    targetX,
    targetY,
    targetZ,
    x,
    y,
    z,
  } = useTweaks('Directional Light', {
    color: '#ffffff',
    intensity: { value: 0.3, min: 0, max: 1 },
    ...makeFolder(
      'Shadow Camera',
      {
        near: { value: 1, min: 0.1, max: 50 },
        far: { value: 6, min: 0.1, max: 50 },
      },
      true
    ),
    ...makeFolder(
      'Positions',
      {
        targetX: { value: 2, min: -5, max: 5 },
        targetY: { value: 0, min: 0, max: 5 },
        targetZ: { value: 1, min: -5, max: 5 },
        x: { value: 2, min: -5, max: 5 },
        y: { value: 2, min: -5, max: 5 },
        z: { value: -1, min: -5, max: 5 },
      },
      true
    ),
    ...makeButton(`Toggle Light Helper`, () =>
      toggleLightHelper((state) => !state)
    ),
    ...makeButton(`Toggle Shadow Helper`, () =>
      toggleShadowHelper((state) => !state)
    ),
  });

  const lightRef = useRef<DirectionalLight>();
  const targetRef = useRef<Object3D>();
  const lightHelper = isHelperLightOn ? DirectionalLightHelper : null;

  useEffect(() => {
    targetRef?.current?.position.set(targetX, targetY, targetZ);
  }, [targetX, targetY, targetZ]);

  useHelper(lightRef, lightHelper);

  useEffect(() => {
    if (lightRef.current) {
      const camera: OrthographicCamera = lightRef.current.shadow.camera;
      const cameraHelper = new CameraHelper(camera);
    }
  }, [far, near]);

  return (
    <group ref={targetRef}>
      <directionalLight
        castShadow
        color={color}
        intensity={intensity}
        position={[x, y, z]}
        ref={lightRef}
        shadow-camera-far={far}
        shadow-camera-near={near}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        target={targetRef.current}
      />
    </group>
  );
}
