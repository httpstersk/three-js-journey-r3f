import { useTexture } from '@react-three/drei';
import React, { useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Texture,
} from 'three';

interface IProps {
  size: number;
}

const Particles: React.FC<IProps> = ({ size }) => {
  const texture = useTexture('/textures/particles/1.png') as Texture;
  const COUNT = 5000;
  const VERTICES = 3;
  const VERTEX_SIZE = 3;
  const length = COUNT * VERTEX_SIZE;

  const geometry = useMemo(() => {
    let geometry = new BufferGeometry();

    const positions = new Float32Array(length);
    [...Array(length)].map(
      (_, i) => (positions[i] = (Math.random() - 0.5) * 10)
    );

    const colors = new Float32Array(length);
    [...Array(length)].map((_, i) => (colors[i] = Math.random()));

    geometry.setAttribute(
      'position',
      new BufferAttribute(positions, VERTEX_SIZE)
    );

    geometry.setAttribute('color', new BufferAttribute(colors, VERTEX_SIZE));

    return geometry;
  }, [length]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    [...Array(length)].map((_, i) => {
      const i3 = i * VERTICES;
      let x = geometry.attributes.position.array[i3];
      // @ts-ignore
      return (geometry.attributes.position.array[i3 + 1] = Math.sin(
        elapsedTime + x
      ));
    });

    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points>
      <primitive attach="geometry" object={geometry} />
      <pointsMaterial
        alphaMap={texture}
        // alphaTest={0.001}
        blending={AdditiveBlending}
        // color={0xff88cc}
        // depthTest={false}
        depthWrite={false}
        size={size}
        sizeAttenuation={true}
        transparent
        vertexColors
      />
    </points>
  );
};

export default function Scene() {
  return <Particles size={0.1} />;
}
