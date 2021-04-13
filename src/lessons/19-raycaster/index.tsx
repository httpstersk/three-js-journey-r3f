import { Sphere } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Group, Mesh, MeshBasicMaterial } from 'three';

const INITIAL_OBJECT_COLOR = 0x0000ff;
const HOVER_OBJECT_COLOR = 0xff0000;

const setMaterialColor = (object: any, color = 0xffffff) => {
  if (object.material instanceof MeshBasicMaterial) {
    return object.material.color.set(color);
  }
};

export default function Scene() {
  const groupRef = useRef<Group>();
  const object1Ref = useRef<Mesh>();
  const object2Ref = useRef<Mesh>();
  const object3Ref = useRef<Mesh>();
  const camera = useThree((state) => state.camera);
  const raycaster = useThree((state) => state.raycaster);

  useFrame(({ clock, mouse }) => {
    const elapsedTime = clock.elapsedTime;
    raycaster.setFromCamera(mouse, camera);

    if (object1Ref.current && object2Ref.current && object3Ref.current) {
      object1Ref.current.position.y = Math.sin(elapsedTime * 0.3) * 1.5;
      object2Ref.current.position.y = Math.sin(elapsedTime * 0.8) * 1.5;
      object3Ref.current.position.y = Math.sin(elapsedTime * 1.4) * 1.5;

      const objectsToTest = [
        object1Ref.current,
        object2Ref.current,
        object3Ref.current,
      ];

      const intersects = raycaster.intersectObjects(objectsToTest);

      if (intersects.length) {
        objectsToTest.map((object) =>
          setMaterialColor(object, INITIAL_OBJECT_COLOR)
        );

        objectsToTest
          .filter((object) =>
            intersects.find((intersect) => {
              return intersect.object === object;
            })
          )
          .map((object) => setMaterialColor(object, HOVER_OBJECT_COLOR));
      }
    }
  });

  return (
    <mesh>
      <group ref={groupRef}>
        <Sphere args={[0.5, 16, 16]} position-x={-2} ref={object1Ref}>
          <meshBasicMaterial attach="material" />
        </Sphere>

        <Sphere args={[0.5, 16, 16]} position-x={0} ref={object2Ref}>
          <meshBasicMaterial attach="material" />
        </Sphere>

        <Sphere args={[0.5, 16, 16]} position-x={2} ref={object3Ref}>
          <meshBasicMaterial attach="material" />
        </Sphere>
      </group>
    </mesh>
  );
}
