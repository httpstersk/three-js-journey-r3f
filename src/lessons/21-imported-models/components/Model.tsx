import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

const MODEL_PATH = '/models/Dogue.gltf';

const Model = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(MODEL_PATH);
  const scale = 2;
  console.log(nodes);

  return (
    <group dispose={null} scale={[scale, scale, scale]} ref={group} {...props}>
      <mesh
        castShadow
        //@ts-ignore
        geometry={nodes.Mesh002.geometry}
        material={materials['body_orange-light']}
        receiveShadow
      />
      <mesh
        castShadow
        //@ts-ignore
        geometry={nodes.Mesh002_1.geometry}
        material={materials.body_orange}
        receiveShadow
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Mesh001.geometry}
        material={materials.eyes}
      />
      <mesh
        castShadow
        //@ts-ignore
        geometry={nodes.Mesh001_1.geometry}
        material={materials.eyes_pupile}
        receiveShadow
      />
      <mesh
        castShadow
        //@ts-ignore
        geometry={nodes.nose!.geometry}
        material={materials.nose}
        receiveShadow
      />
    </group>
  );
};

export default Model;

useGLTF.preload(MODEL_PATH);
