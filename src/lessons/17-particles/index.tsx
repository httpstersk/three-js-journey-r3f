import { useTexture } from '@react-three/drei';
import React, { useEffect, useMemo, useRef } from 'react';
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Texture,
} from 'three';

interface IProps {
  size: number;
}

const Particles: React.FC<IProps> = ({ size, ...rest }) => {
  const texture = useTexture('/textures/particles/1.png') as Texture;
  const COUNT = 5000;
  const VERTEX_SIZE = 3;
  const length = COUNT * VERTEX_SIZE;

  const geometry = useMemo(() => {
    let geometry = new BufferGeometry();

    const positions = new Float32Array(length);
    [...Array(length)].map(
      (_, i) => (positions[i] = (Math.random() - 0.5) * 10)
    );

    geometry.setAttribute(
      'position',
      new BufferAttribute(positions, VERTEX_SIZE)
    );

    return geometry;
  }, [length]);

  return (
    <points>
      <primitive attach="geometry" object={geometry} />
      <pointsMaterial
        alphaMap={texture}
        blending={AdditiveBlending}
        color={0xff88cc}
        depthWrite={false}
        size={size}
        sizeAttenuation={true}
        transparent
      />
    </points>
  );
};

export default function Scene() {
  return (
    <mesh>
      <group>
        <Particles size={0.1} />
      </group>
    </mesh>
  );
}
