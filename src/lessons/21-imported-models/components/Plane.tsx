export const PLANE_SIZE = 20;

const Plane = ({ ...props }) => {
  return (
    <mesh castShadow rotation={[-Math.PI * 0.5, 0, 0]}>
      <planeBufferGeometry args={[PLANE_SIZE, PLANE_SIZE]} />
      <meshStandardMaterial color={0x777777} metalness={0.3} roughness={0.4} />
    </mesh>
  );
};

export default Plane;
