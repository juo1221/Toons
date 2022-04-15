import React from 'react';
import TabContainer from './container/TabContainer';
import SearchBarContainer from './container/SearchBarContainer';
import FilteringBarContainer from './container/FilteringBarContainer';
import DateContainer from './container/DateContainer';
import SortContainer from './container/SortContainer';
import CardListContainer from './container/CardListContainer';
import CardHoverContainer from './container/CardHoverContainer';
import styled from 'styled-components';

const App = () => {
  return (
    <Wrapper>
      <TabContainer />
      <Container>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4rem' }}>
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
      {/* <CardHoverContainer /> */}
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
  overflow: auto;
`;
const Box = styled.div`
  margin-top: 3.7rem;
  margin-bottom: 4.8rem;
  ${({ theme }) => theme.CusFlex('space-between')}
`;
export default App;
