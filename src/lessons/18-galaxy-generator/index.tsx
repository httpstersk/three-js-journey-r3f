import React, { useMemo } from 'react';
import { AdditiveBlending, BufferAttribute, BufferGeometry } from 'three';

interface IProps {
  size: number;
}

const Particles: React.FC<IProps> = ({ size }) => {
  const COUNT = 5000;
  const VERTICES = 3;
  const VERTEX_SIZE = 3;
  const length = COUNT * VERTEX_SIZE;

  const geometry = useMemo(() => {
    let geometry = new BufferGeometry();

    const colors = new Float32Array(length);
    [...Array(length)].map((_, i) => colors[i]);

    const positions = new Float32Array(length);
    [...Array(length)].map((_, i) => {
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
  }, [length]);

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
  return <Particles size={0.01} />;
}
