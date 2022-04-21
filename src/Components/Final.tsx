import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlayVar = {
  initial: { backgroundColor: "rgba(0, 0, 0, 0)" },
  on: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  off: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
};

const Final = () => {
  const [id, setId] = useState<null | number>(null);
  console.log(id);
  return (
    <Container>
      <Grid>
        {[1, 2, 3, 4].map((i) => (
          <Box onClick={() => setId(i)} key={i} layoutId={i + ""} />
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            variants={overlayVar}
            initial="initial"
            animate="on"
            exit="off"
          >
            <Box layoutId={id + ""} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Container>
  );
};

export default Final;
