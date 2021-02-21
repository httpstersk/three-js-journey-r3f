import { Plane, useTexture } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import {
  Float32BufferAttribute,
  PlaneBufferGeometry,
  RepeatWrapping,
  Texture,
} from 'three';

const FLOOR_SIZE = 20;
const TEXTURE_REPEAT = 8;

export default function Floor() {
  const floorRef = useRef<PlaneBufferGeometry>();
  const [
    grassColorTexture,
    grassAmbientOcclusionTexture,
    grassNormalTexture,
    grassRoughnessTexture,
  ] = useTexture([
    '/textures/grass/color.jpg',
    '/textures/grass/ambientOcclusion.jpg',
    '/textures/grass/normal.jpg',
    '/textures/grass/roughness.jpg',
  ]) as Texture[];

  useEffect(() => {
    grassColorTexture.repeat.set(TEXTURE_REPEAT, TEXTURE_REPEAT);
    grassAmbientOcclusionTexture.repeat.set(TEXTURE_REPEAT, TEXTURE_REPEAT);
    grassNormalTexture.repeat.set(TEXTURE_REPEAT, TEXTURE_REPEAT);
    grassRoughnessTexture.repeat.set(TEXTURE_REPEAT, TEXTURE_REPEAT);

    grassColorTexture.wrapT = grassColorTexture.wrapS = RepeatWrapping;
    grassAmbientOcclusionTexture.wrapT = grassAmbientOcclusionTexture.wrapS = RepeatWrapping;
    grassNormalTexture.wrapT = grassNormalTexture.wrapS = RepeatWrapping;
    grassRoughnessTexture.wrapT = grassRoughnessTexture.wrapS = RepeatWrapping;
  }, [
    grassColorTexture,
    grassAmbientOcclusionTexture,
    grassNormalTexture,
    grassRoughnessTexture,
  ]);

  useEffect(() => {
    const floor = floorRef.current;

    if (floor && floor.setAttribute) {
      floor.setAttribute(
        'uv2',
        new Float32BufferAttribute(floor.attributes.uv.array, 2)
      );
    }
  }, []);

  return (
    <Plane
      args={[FLOOR_SIZE, FLOOR_SIZE]}
      receiveShadow
      ref={floorRef}
      rotation-x={-Math.PI * 0.5}
      position-y={0}
    >
      <meshStandardMaterial
        map={grassColorTexture}
        aoMap={grassAmbientOcclusionTexture}
        normalMap={grassNormalTexture}
        roughnessMap={grassRoughnessTexture}
      />
    </Plane>
  );
}
