import React from "react";
import TabContainer from "./container/TabContainer";
import styled from "styled-components";
const App = () => {
  return (
    <Wrapper>
      <TabContainer />
      <div>{/* <MainContainer /> */}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  ${({ theme }) => theme.CusFlex()}
`;
const Container = styled.div`
  width: 144rem;
  height: 96rem;
  background-color: ${({ theme }) => theme.CusColor.black};
`;
export default App;
