import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  width: 100vw;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BasicMotionValues = () => {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-960, 960], [-360, 360]);
  const gradient = useTransform(
    x,
    [-960, 960],
    [
      "linear-gradient(135deg, rgb(34, 101, 121), rgb(83, 14, 211))",
      "linear-gradient(135deg, rgb(14, 189, 66), rgb(238, 217, 24))",
    ]
  );
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  return (
    <Container style={{ background: gradient }}>
      <Box drag="x" dragSnapToOrigin style={{ x, rotateZ, scale }} />
    </Container>
  );
};

export default BasicMotionValues;
