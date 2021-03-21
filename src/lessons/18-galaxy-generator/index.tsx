import React, { useMemo } from 'react';
import { AdditiveBlending, BufferAttribute, BufferGeometry } from 'three';
import { useTweaks } from 'use-tweaks';

interface IProps {}

const Galaxy: React.FC<IProps> = () => {
  const COUNT = 5000;
  const VERTICES = 3;
  const VERTEX_SIZE = 3;

  const { count, size } = useTweaks('Galaxy Generator', {
    count: {
      value: COUNT,
      min: Math.floor(Math.sqrt(COUNT)),
      max: COUNT * 2,
      step: 1,
    },
    size: { value: 0.01, min: 0.005, max: 0.1, step: 0.001 },
  });

  console.log(count);

  const geometry = useMemo(() => {
    let geometry = new BufferGeometry();

    const colors = new Float32Array(count * VERTEX_SIZE);
    [...Array(count * VERTEX_SIZE)].map((_, i) => colors[i]);

    const positions = new Float32Array(count * VERTEX_SIZE);
    [...Array(count * VERTEX_SIZE)].map((_, i) => {
      const i3 = i * VERTICES;
      positions[i3] = (Math.random() - 0.5) * 3;
      positions[i3 + 1] = (Math.random() - 0.5) * 3;
      positions[i3 + 2] = (Math.random() - 0.5) * 3;

      return positions;
    });

    geometry.setAttribute('color', new BufferAttribute(colors, VERTEX_SIZE));

    geometry.setAttribute(
      'position',
      new BufferAttribute(positions, VERTEX_SIZE)
    );

    return geometry;
  }, [count]);

  return (
    <points>
      <primitive attach="geometry" object={geometry} />
      <pointsMaterial
        blending={AdditiveBlending}
        depthWrite={false}
        size={size}
        sizeAttenuation={true}
      />
    </points>
  );
};

export default function Scene() {
  return <Galaxy />;
}
