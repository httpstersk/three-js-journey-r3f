import CONSTANTS from 'constants/';
import { folder, useControls } from 'leva';
import { useRef, useState } from 'react';
import { PointLight } from 'three';

export default function PointLightWithHelper() {
  const [isHelperShadowOn, toggleShadowHelper] = useState(false);

  const { color, intensity, x, y, z } = useControls('Point Light', {
    color: '#ffffff',
    intensity: { value: 0.5, min: 0, max: 1 },
    Positions: folder(
      {
        x: { value: -1, min: -5, max: 5 },
        y: { value: 1, min: -5, max: 5 },
        z: { value: 0, min: -5, max: 5 },
      },
      { collapsed: true }
    ),
    'Show Helper': {
      value: !isHelperShadowOn,
      onChange: () => toggleShadowHelper((helper) => !helper),
    },
  });

  const lightRef = useRef<PointLight>();

  return (
    <group>
      <pointLight
        castShadow
        color={color}
        intensity={intensity}
        position={[x, y, z]}
        ref={lightRef}
        shadow-camera-far={5}
        shadow-camera-near={0.1}
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
