import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { PerspectiveCamera as PerspectiveCameraType, Vector2 } from 'three';
import Cube from 'components/Cube';

export default function Scene() {
  const camera = useRef<PerspectiveCameraType>();
  const cursor = useRef(new Vector2(0, 0));
  const { setDefaultCamera } = useThree();

  const onMouseMove = ({ clientX, clientY }: any) => {
    const { innerHeight, innerWidth } = window;
    cursor.current.x = clientX / innerWidth;
    cursor.current.y = clientY / innerHeight;
  };

  useEffect(() => {
    if (camera.current) {
      setDefaultCamera(camera.current);
    }
  }, [camera, setDefaultCamera]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  });

  useFrame(() => {
    if (camera.current) {
      const { x, y } = cursor.current;
      camera.current.position.x = Math.sin(x * Math.PI * 2) * 3;
      camera.current.position.z = Math.cos(x * Math.PI * 2) * 3;
      camera.current.position.y = y * 3;
    }
  });

  return (
    <>
      <Cube color={0xff0000} />

      <PerspectiveCamera
        aspect={2}
        far={100}
        fov={75}
        makeDefault
        near={0.1}
        position={[2, 2, 2]}
        ref={camera}
      />
    </>
  );
}
