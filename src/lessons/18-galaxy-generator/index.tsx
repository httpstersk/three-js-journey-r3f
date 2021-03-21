import React, { useMemo } from 'react';
import { AdditiveBlending, BufferAttribute, BufferGeometry } from 'three';
import { useControls } from 'leva';

interface IProps {}

const Galaxy: React.FC<IProps> = () => {
  const COUNT = 5000;
  const VERTICES = 3;
  const VERTEX_SIZE = 3;

  const { count, radius, size } = useControls({
    count: {
      min: Math.floor(Math.sqrt(COUNT)),
      max: COUNT * 2,
      step: 1,
      value: COUNT,
    },
    radius: { min: 0.01, max: 20, step: 0.01, value: 5 },
    size: { min: 0.005, max: 0.1, step: 0.001, value: 0.01 },
  });

  const geometry = useMemo(() => {
    let geometry = new BufferGeometry();

    const colors = new Float32Array(count * VERTEX_SIZE);
    [...Array(count * VERTEX_SIZE)].map((_, i) => colors[i]);

    const positions = new Float32Array(count * VERTEX_SIZE);
    [...Array(count * VERTEX_SIZE)].map((_, i) => {
      const i3 = i * VERTICES;
      const r = Math.random() * radius;
      positions[i3] = r;
      positions[i3 + 1] = 0;
      positions[i3 + 2] = 0;
      return positions;
    });

    geometry.setAttribute('color', new BufferAttribute(colors, VERTEX_SIZE));

    geometry.setAttribute(
      'position',
      new BufferAttribute(positions, VERTEX_SIZE)
    );

    return geometry;
  }, [count, radius]);

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
