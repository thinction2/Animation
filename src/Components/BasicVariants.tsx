import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e09;
  /* background-color: linear-gradient(20deg, hsl(#e09), hsl(#d0e)); */
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  place-self: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delay: 0.2,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVariatns = {
  start: { opacity: 0, y: 10 },
  end: { opacity: 1, y: 0 },
};

const BasicVariants = () => {
  return (
    <Container>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariatns} />
        <Circle variants={circleVariatns} />
        <Circle variants={circleVariatns} />
        <Circle variants={circleVariatns} />
      </Box>
    </Container>
  );
};

export default BasicVariants;
