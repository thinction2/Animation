import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100px;
  width: 400px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 1);
  font-size: 28px;
`;
const BtnWrapepr = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  align-items: center;
`;

const boxV = {
  entry: (isBack: boolean) => {
    return { x: isBack ? -500 : 500, opacity: 0, scale: 0 };
  },
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: (isBack: boolean) => {
    return {
      x: isBack ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: { duration: 0.3 },
    };
  },
};

const CAnimatePresence = () => {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextFn = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevFn = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <Container>
      <AnimatePresence custom={back}>
        <Box
          custom={back}
          variants={boxV}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <BtnWrapepr>
        <button onClick={prevFn}>prev</button>
        <button onClick={nextFn}>next</button>
      </BtnWrapepr>
    </Container>
  );
};

export default CAnimatePresence;
