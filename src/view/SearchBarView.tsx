import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { observer } from 'mobx-react-lite';

const SearchBarView = observer(() => {
  return (
    <div>
      <Bar>
        <AiOutlineSearch />
        <Input placeholder="작가,작품명 검색하기" />
      </Bar>
    </div>
  );
});

const Bar = styled.div`
  width: 39.837rem;
  height: 5rem;
  border-radius: 2rem;
  padding: 1.3rem;
  ${({ theme }) => theme.CusFlex('none', 'none')}
  background-color: ${({ theme }) => theme.CusColor.white};
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
const Input = styled.input`
  width: 20.719rem;
  height: 2.5rem;
  font-size: 2rem;
  margin-left: 0.4rem;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.CusColor.gray};
`;
export default SearchBarView;
