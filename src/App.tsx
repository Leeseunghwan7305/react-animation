import styled from "styled-components";
import React, { useEffect, useRef, useTransition } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
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
  width: 100px;
  height: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 255);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  overflow: hidden;
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
  drag: { backgroundColor: "#ebaeae" },
};

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

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;

const svg = {
  start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  end: {
    fill: "rgba(255, 255, 255, 1)",
    pathLength: 1,
  },
};

function App() {
  const x = useMotionValue(0);
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const { scrollY, scrollYProgress } = useViewportScroll();
  const scroll = useTransform(scrollYProgress, [0, 1], [1, 5]);
  //motionValue 는 (상태)로 살지 않고있다.
  // state가 아니다
  //MotionValue가 바뀌면, 컴포넌트가 재랜더링되지 않는다.
  useEffect(() => {
    scrollY.onChange(() => {
      console.log(scrollY.get(), scrollYProgress.get());
    });
  }, [scrollY, scrollYProgress]);

  return (
    <>
      <Wrapper>
        <BiggerBox ref={biggerBoxRef}>
          <Box
            drag
            dragElastic={0.5}
            dragSnapToOrigin={true}
            dragConstraints={biggerBoxRef}
            variants={variant}
            whileDrag="drag"
            whileHover="hover"
            whileTap="click"
          ></Box>
        </BiggerBox>
        <button onClick={() => x.set(200)}>Click me</button>
        <Box
          style={{ x, rotateZ, scale: scroll }}
          drag="x"
          dragSnapToOrigin
        ></Box>

        <Svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <motion.path
            variants={svg}
            initial="start"
            animate="end"
            transition={{
              default: { duration: 5 },
              fill: { duration: 1, delay: 3 },
            }}
            d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"
          ></motion.path>
        </Svg>
      </Wrapper>
    </>
  );
}
//x 축을 수정하겠다.

export default App;
