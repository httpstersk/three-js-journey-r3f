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
  const { camera, raycaster } = useThree();
  const rayDirection = new Vector3(10, 0, 0);
  rayDirection.normalize();

  useFrame(({ clock, mouse }) => {
    const elapsedTime = clock.elapsedTime;
    raycaster.setFromCamera(mouse, camera);

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

      if (intersects.length) {
        intersects.map((intersect) => {
          if (intersect.object instanceof Mesh) {
            return intersect.object.material.color.set(0x0000ff);
          }

          return intersect;
        });

        objectsToTest
          .filter((object) =>
            intersects.find((intersect) => {
              return intersect.object === object;
            })
          )
          .map((object) => {
            if (object.material instanceof MeshBasicMaterial) {
              return object.material.color.set(0xff0000);
            }

            return object;
          });
      }
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
