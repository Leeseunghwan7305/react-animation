import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-family: "Source Sans Pro", sans-serif;
  color: black;
  line-height: 1.2;
  background: linear-gradient(135deg, #e09, #d0e);
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  place-self: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const myVars5 = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.2,
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};
const myVars = {
  start: { scale: 0, y: 130 },
  end: {
    scale: 1,
    y: 0,
    transition: { type: "spring", duration: 1, bounce: 0.5 },
  },
};

function App() {
  return (
    <>
      <Wrapper>
        <Box variants={myVars5} initial="start" animate="end">
          <Circle variants={myVars} />
          <Circle variants={myVars} />
          <Circle variants={myVars} />
          <Circle variants={myVars} />
        </Box>
      </Wrapper>
    </>
  );
}

export default App;
