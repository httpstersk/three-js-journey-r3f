import { Sphere } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame, useResource, useThree } from 'react-three-fiber';
import { Group, Mesh, MeshBasicMaterial, Vector3 } from 'three';

export default function Scene() {
  const groupRef = useRef<Group>();
  const object1Ref = useRef<Mesh>();
  const object2Ref = useRef<Mesh>();
  const object3Ref = useRef<Mesh>();
  const material = useResource<MeshBasicMaterial>();
  const { raycaster } = useThree();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const rayOrigin = new Vector3(-3, 0, 0);
    const rayDirection = new Vector3(10, 0, 0);

    rayDirection.normalize();
    raycaster.set(rayOrigin, rayDirection);

    if (object1Ref.current && object2Ref.current && object3Ref.current) {
      const objectsToTest = [
        object1Ref.current,
        object2Ref.current,
        object3Ref.current,
      ];

      object1Ref.current.position.y = Math.sin(elapsedTime * 0.3) * 1.5;
      object2Ref.current.position.y = Math.sin(elapsedTime * 0.8) * 1.5;
      object3Ref.current.position.y = Math.sin(elapsedTime * 1.4) * 1.5;

      const intersects = raycaster.intersectObjects(objectsToTest);

      objectsToTest.map((object) => {
        if (object.material instanceof MeshBasicMaterial) {
          return object.material.color.set(0xff0000);
        }

        return object;
      });

      intersects.map((intersect) => {
        if (intersect.object instanceof Mesh) {
          return intersect.object.material.color.set(0x0000ff);
        }

        return intersect;
      });
    }
  });

  return (
    <mesh>
      <meshBasicMaterial color={0xff0000} ref={material} />

      {material.current && (
        <group ref={groupRef}>
          <Sphere
            args={[0.5, 16, 16]}
            material={material.current}
            position-x={-2}
            ref={object1Ref}
          />

          <Sphere
            args={[0.5, 16, 16]}
            material={material.current}
            position-x={0}
            ref={object2Ref}
          />

          <Sphere
            args={[0.5, 16, 16]}
            material={material.current}
            position-x={2}
            ref={object3Ref}
          />
        </group>
      )}
    </mesh>
  );
}
