import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color, PointLight } from 'three';
import Ghost from './Ghost';

export default function Ghosts({ ...props }) {
  const ghostRef1 = useRef<PointLight>(null);
  const ghostRef2 = useRef<PointLight>(null);
  const ghostRef3 = useRef<PointLight>(null);

  useFrame(({ clock }) => {
    if (ghostRef1.current && ghostRef2.current && ghostRef3.current) {
      const elapsedTime = clock.getElapsedTime();

      const ghost1Angle = elapsedTime * 0.5;
      ghostRef1.current.position.x = Math.cos(ghost1Angle) * 4;
      ghostRef1.current.position.z = Math.sin(ghost1Angle) * 4;
      ghostRef1.current.position.y = Math.sin(elapsedTime * 3);

      const ghost2Angle = -elapsedTime * 0.32;
      ghostRef2.current.position.x = Math.cos(ghost2Angle) * 5;
      ghostRef2.current.position.z = Math.sin(ghost2Angle) * 5;
      ghostRef2.current.position.y =
        Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);

      const ghost3Angle = -elapsedTime * 0.18;
      ghostRef3.current.position.x =
        Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32));
      ghostRef3.current.position.z =
        Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5));
      ghostRef3.current.position.y =
        Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);
    }
  });

  return (
    <group>
      <Ghost color={new Color(0xff00ff)} ref={ghostRef1} />;
      <Ghost color={new Color(0x00ffff)} ref={ghostRef2} />;
      <Ghost color={new Color(0xffff00)} ref={ghostRef3} />;
    </group>
  );
}
