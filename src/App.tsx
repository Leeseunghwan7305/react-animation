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
  background-color: rgba(255, 255, 255, 255);
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

const variant = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { borderRadius: "100px" },
};
function App() {
  return (
    <>
      <Wrapper>
        <Box
          drag
          variants={variant}
          whileDrag={{ backgroundColor: "#ebaeae" }}
          whileHover="hover"
          whileTap="click"
        ></Box>
      </Wrapper>
    </>
  );
}

export default App;
