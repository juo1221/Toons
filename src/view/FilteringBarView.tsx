import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

const FilteringBarView = () => {
  return (
    <div>
      <Bar>
        <AiOutlineSearch />
        <Input placeholder="필터링하기" />
      </Bar>
    </div>
  );
};

const Bar = styled.div`
  width: 20.019rem;
  height: 4rem;
  border-radius: 2rem;
  padding: 1.902rem 1rem;
  ${({ theme }) => theme.CusFlex('none')}
  background-color: ${({ theme }) => theme.CusColor.white};
  svg {
    width: 2rem;
    height: 2rem;
  }
`;
const Input = styled.input`
  height: 1.8rem;
  font-size: 1.5rem;
  margin-left: 0.4rem;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.CusColor.gray};
`;
export default FilteringBarView;
