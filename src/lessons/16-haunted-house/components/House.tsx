import { Box, useTexture } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import {
  BoxBufferGeometry,
  Float32BufferAttribute,
  Group,
  Texture,
} from 'three';

const WALLS_SIZE = 4;
const WALLS_HEIGHT = 2.5;

export default function House() {
  const wallsRef = useRef<Group>();
  const houseRef = useRef<BoxBufferGeometry>();
  const [
    bricksColorTexture,
    bricksAmbientOcclusionTexture,
    bricksNormalTexture,
    bricksRoughnessTexture,
  ] = useTexture([
    '/textures/bricks/color.jpg',
    '/textures/bricks/ambientOcclusion.jpg',
    '/textures/bricks/normal.jpg',
    '/textures/bricks/roughness.jpg',
  ]) as Texture[];

  useEffect(() => {
    const house = houseRef.current;

    if (house && house.setAttribute) {
      house.setAttribute(
        'uv2',
        new Float32BufferAttribute(house.attributes.uv.array, 2)
      );
    }
  }, []);

  return (
    <group ref={houseRef}>
      <Box
        args={[WALLS_SIZE, WALLS_HEIGHT, WALLS_SIZE]}
        castShadow
        ref={wallsRef}
        position-y={WALLS_HEIGHT / 2}
      >
        <meshStandardMaterial
          map={bricksColorTexture}
          aoMap={bricksAmbientOcclusionTexture}
          normalMap={bricksNormalTexture}
          roughnessMap={bricksRoughnessTexture}
        />
      </Box>
    </group>
  );
}
