import React from 'react';
import TabContainer from './container/TabContainer';
import SearchBarContainer from './container/SearchBarContainer';
import FilteringBarContainer from './container/FilteringBarContainer';
import DateContainer from './container/DateContainer';
import SortContainer from './container/SortContainer';
import styled from 'styled-components';

const App = () => {
  return (
    <Wrapper>
      <TabContainer />
      <Container>
        <SearchBarContainer />
        <DateContainer />
        <FilteringBarContainer />
        <SortContainer />
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
  padding: 0 9.509rem;
  background-color: ${({ theme }) => theme.CusColor.main};
`;
export default App;
