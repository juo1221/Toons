import React from 'react';
import TabContainer from './container/TabContainer';
import SearchBarContainer from './container/SearchBarContainer';
import FilteringBarContainer from './container/FilteringBarContainer';
import DateContainer from './container/DateContainer';
import SortContainer from './container/SortContainer';
import CardListContainer from './container/CardListContainer';

import styled from 'styled-components';

const App = () => {
  return (
    <Wrapper>
      <TabContainer />
      <Container>
        <div style={{ marginTop: '4rem' }}>
          <SearchBarContainer />
        </div>
        <div style={{ marginTop: '2.8rem' }}>
          <DateContainer />
        </div>
        <Box>
          <FilteringBarContainer />
          <SortContainer />
        </Box>
        <CardListContainer />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  ${({ theme }) => theme.CusFlex('none', 'none')}
`;
const Container = styled.div`
  width: 100%;
  padding: 0 9.509rem;
  background-color: ${({ theme }) => theme.CusColor.main};
  ${({ theme }) => theme.hideScroll()};
`;

const Box = styled.div`
  margin-top: 3.7rem;
  ${({ theme }) => theme.CusFlex('space-between')};
  @media screen and (max-width: 1024px) {
    width: 50rem;
  }
`;
export default App;
