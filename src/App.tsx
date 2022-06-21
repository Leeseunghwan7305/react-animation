import styled from "styled-components";
import React from "react";
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

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  return (
    <>
      <Wrapper>
        <Box></Box>
      </Wrapper>
    </>
  );
}

export default App;
