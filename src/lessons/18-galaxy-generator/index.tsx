import React, { useMemo } from 'react';
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
} from 'three';
import { useControls } from 'leva';

interface IProps {}

const Galaxy: React.FC<IProps> = () => {
  const COUNT = 30000;
  const VERTICES = 3;
  const VERTEX_SIZE = 3;

  const {
    branches,
    colorI,
    colorO,
    count,
    radius,
    randomness,
    randomnessPower,
    size,
    spin,
  } = useControls({
    branches: { min: 2, max: 20, step: 1, value: 5 },
    colorI: '#ff6030',
    colorO: '#1b3984',
    count: {
      min: Math.floor(Math.sqrt(COUNT)),
      max: 100_000,
      step: 1,
      value: COUNT,
    },
    radius: { min: 0.01, max: 20, step: 0.01, value: 5 },
    randomness: { min: 0, max: 2, step: 0.001, value: 0.2 },
    randomnessPower: { min: 1, max: 10, step: 0.001, value: 3 },
    size: { min: 0.005, max: 0.1, step: 0.001, value: 0.01 },
    spin: { min: -5, max: 5, step: 0.001, value: 1 },
  });

  const geometry = useMemo(() => {
    let geometry = new BufferGeometry();
    const iteratios = count * VERTEX_SIZE;
    const colors = new Float32Array(iteratios);
    const positions = new Float32Array(iteratios);

    [...Array(iteratios)].map((_, i) => {
      const i3 = i * VERTICES;
      const r = Math.random() * radius;

      const branchesAngle = ((i % branches) / branches) * Math.PI * 2;
      const spinAngle = r * spin;

      const mixedColor = new Color(colorI).clone();
      mixedColor.lerp(new Color(colorO), r / radius);

      const getRandom = () =>
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        randomness *
        r;

      const randomX = getRandom();
      const randomY = getRandom();
      const randomZ = getRandom();

      positions[i3] = Math.cos(branchesAngle + spinAngle) * r + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchesAngle + spinAngle) * r + randomZ;

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;

      return positions;
    });

    geometry.setAttribute('color', new BufferAttribute(colors, VERTEX_SIZE));

    geometry.setAttribute(
      'position',
      new BufferAttribute(positions, VERTEX_SIZE)
    );

    return geometry;
  }, [
    branches,
    count,
    colorI,
    colorO,
    radius,
    randomness,
    randomnessPower,
    spin,
  ]);

  return (
    <points>
      <primitive attach="geometry" object={geometry} />
      <pointsMaterial
        blending={AdditiveBlending}
        depthWrite={false}
        size={size}
        sizeAttenuation
        vertexColors
      />
    </points>
  );
};

export default function Scene() {
  return <Galaxy />;
}
