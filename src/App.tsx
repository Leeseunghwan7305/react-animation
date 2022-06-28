import styled from "styled-components";
import React, { useEffect, useRef, useState, useTransition } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useRecoilBridgeAcrossReactRoots_UNSTABLE } from "recoil";
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 300;
  font-family: "Source Sans Pro", sans-serif;
  color: black;
  line-height: 1.2;
  background: linear-gradient(135deg, #e09, #d0e);
`;

// const svg: Variants = {
//   initial: {
//     fill: "rgba(255,255,255,0)",
//     pathLength: 0,
//     stroke: "white",
//     strokeWidth: 2,
//     d: "M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z",
//   },
//   animate: {
//     fill: "rgba(255,255,255,1)",
//     pathLength: 1,
//     transition: {
//       default: { duration: 5 },
//       fill: { duration: 2, delay: 1 },
//     },
//   },
// };

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
const Box = styled(motion.div)`
  border-radius: 40px;
  height: 200px;
  background-color: skyblue;
  box-shadow: 0 2px 3px;
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box2 = styled(motion.div)`
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 30px;
`;
const OverVar = {
  start: { backgroundColor: "rgba(0, 0, 0, 0)" },
  end: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    transition: {},
  },
  leaving: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    transition: {},
  },
};
function App() {
  let [layoutId2, setLayoutId] = useState<string | null>(null);
  return (
    <>
      <Wrapper>
        <Grid>
          <Box onClick={() => setLayoutId("1")} layoutId="1"></Box>
          <Box onClick={() => setLayoutId("2")} layoutId="2"></Box>
          <Box onClick={() => setLayoutId("3")} layoutId="3"></Box>
          <Box onClick={() => setLayoutId("4")} layoutId="4"></Box>
        </Grid>
        <AnimatePresence>
          {layoutId2 ? (
            <Overlay
              onClick={() => {
                setLayoutId(null);
              }}
              variants={OverVar}
              initial="start"
              animate="end"
              exit="leaving"
            >
              <Box2 layoutId={layoutId2 + ""}></Box2>
            </Overlay>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}
//x 축을 수정하겠다.

export default App;
