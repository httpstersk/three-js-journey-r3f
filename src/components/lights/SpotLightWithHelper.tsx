import { useRef, useState } from 'react';
import { SpotLight } from 'three';
import { makeButton, makeFolder, useTweaks } from 'use-tweaks';
import CONSTANTS from 'constants/';

export default function SpotLightWithHelper() {
  const [isHelperShadowOn, toggleShadowHelper] = useState(false);

  const { color, intensity, x, y, z } = useTweaks('Spot Light', {
    color: '#ffffff',
    intensity: { value: 0.5, min: 0, max: 1 },
    ...makeFolder(
      'Positions',
      {
        x: { value: 0, min: -5, max: 5 },
        y: { value: 2, min: -5, max: 5 },
        z: { value: 2, min: -5, max: 5 },
      },
      true
    ),
    ...makeButton(`Toggle Shadow Helper`, () =>
      toggleShadowHelper((state) => !state)
    ),
  });

  const lightRef = useRef<SpotLight>();

  return (
    <group>
      <spotLight
        angle={Math.PI * 0.3}
        castShadow
        color={color}
        distance={10}
        intensity={intensity}
        position={[x, y, z]}
        ref={lightRef}
        shadow-camera-far={6}
        shadow-camera-near={1}
        shadow-camera-fov={30}
        shadow-mapSize-height={CONSTANTS.SHADOW_MAP_SIZE}
        shadow-mapSize-width={CONSTANTS.SHADOW_MAP_SIZE}
        shadow-radius={1}
      />

      {lightRef.current && (
        <cameraHelper
          args={[lightRef.current.shadow.camera]}
          visible={isHelperShadowOn}
        />
      )}
    </group>
  );
}
