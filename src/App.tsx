import styled from "styled-components";
import React, { useEffect, useRef, useTransition } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
const Wrapper = styled.div`
  height: 200vh;
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
      </Wrapper>
    </>
  );
}
//x 축을 수정하겠다.

export default App;
