import { Plane, useTexture } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { Float32BufferAttribute, PlaneBufferGeometry, Texture } from 'three';

const DOOR_SIZE = 2;

export default function Door() {
  const doorRef = useRef<PlaneBufferGeometry>();
  const [
    doorAlphaTexture,
    doorAmbientOcclusionTexture,
    doorColorTexture,
    doorHeightTexture,
    doorMetalnessTexture,
    doorNormalTexture,
    doorRoughnessTexture,
  ] = useTexture([
    '/textures/door/alpha.jpg',
    '/textures/door/ambientOcclusion.jpg',
    '/textures/door/color.jpg',
    '/textures/door/height.jpg',
    '/textures/door/metalness.jpg',
    '/textures/door/normal.jpg',
    '/textures/door/roughness.jpg',
  ]) as Texture[];

  useEffect(() => {
    const door = doorRef.current;

    if (door && door.setAttribute) {
      door.setAttribute(
        'uv2',
        new Float32BufferAttribute(door.attributes.uv.array, 2)
      );
    }
  }, []);

  return (
    <Plane
      args={[DOOR_SIZE, DOOR_SIZE, 100, 100]}
      position-y={1}
      position-z={DOOR_SIZE + 0.01}
      receiveShadow
      ref={doorRef}
    >
      <meshStandardMaterial
        alphaMap={doorAlphaTexture}
        aoMap={doorAmbientOcclusionTexture}
        map={doorColorTexture}
        displacementMap={doorHeightTexture}
        displacementScale={0.1}
        metalnessMap={doorMetalnessTexture}
        normalMap={doorNormalTexture}
        roughnessMap={doorRoughnessTexture}
        transparent={true}
      />
    </Plane>
  );
}
