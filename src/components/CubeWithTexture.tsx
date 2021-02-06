import { useEffect } from 'react';
import { Box, useTexture } from '@react-three/drei';
import { NearestFilter, MirroredRepeatWrapping, Texture } from 'three';
import minecraftTexture from 'assets/textures/minecraft.png';

const Cube = ({ ...props }) => {
  const texture = useTexture(minecraftTexture) as Texture;
  const size = 1;

  useEffect(() => {
    texture.wrapT = texture.wrapS = MirroredRepeatWrapping;
    texture.generateMipmaps = false;
    texture.minFilter = NearestFilter;
    texture.magFilter = NearestFilter;
  }, [texture]);

  return (
    <mesh {...props}>
      <Box args={[size, size, size]}>
        <meshBasicMaterial map={texture} />
      </Box>
    </mesh>
  );
};

export default Cube;
