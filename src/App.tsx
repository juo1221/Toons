import React from "react";
import TabContainer from "./container/TabContainer";
import SearchBarContainer from "./container/SearchBarContainer";
import DateContainer from "./container/DateContainer";
import styled from "styled-components";

const App = () => {
  return (
    <Wrapper>
      <TabContainer />
      <Container>
        <SearchBarContainer />
        <DateContainer />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  ${({ theme }) => theme.CusFlex()}
`;
const Container = styled.div`
  width: 107.7rem;
  height: 96rem;
  background-color: ${({ theme }) => theme.CusColor.black};
`;
export default App;
