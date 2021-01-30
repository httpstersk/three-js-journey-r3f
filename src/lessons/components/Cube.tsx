import { Box } from '@react-three/drei';

const Cube = ({ ...props }) => {
  const { color } = props;
  const size = 1;

  return (
    <mesh {...props}>
      <Box args={[size, size, size]}>
        <meshBasicMaterial color={color} />
      </Box>
    </mesh>
  );
};

export default Cube;
