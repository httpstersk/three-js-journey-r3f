import CONSTANTS from 'constants/';
import { folder, useControls } from 'leva';
import { useRef, useState } from 'react';
import { DirectionalLight } from 'three';

export default function DirectionalLightWithHelper() {
  const [isHelperShadowOn, toggleShadowHelper] = useState(false);

  const { color, intensity, x, y, z } = useControls('Directional Light', {
    color: '#ffffff',
    intensity: { value: 0.5, min: 0, max: 1 },
    Positions: folder(
      {
        x: { value: 2, min: -5, max: 5 },
        y: { value: 2, min: -5, max: 5 },
        z: { value: -1, min: -5, max: 5 },
      },
      { collapsed: true }
    ),
    'Show Helper': {
      value: !isHelperShadowOn,
      onChange: () => toggleShadowHelper((helper) => !helper),
    },
  });

  const lightRef = useRef<DirectionalLight>();

  return (
    <group>
      <directionalLight
        castShadow
        color={color}
        intensity={intensity}
        position={[x, y, z]}
        ref={lightRef}
        shadow-camera-bottom={-2}
        shadow-camera-left={-2}
        shadow-camera-right={2}
        shadow-camera-top={2}
        shadow-camera-far={6}
        shadow-camera-near={1}
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
