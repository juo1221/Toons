import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';

type TFilteringBarView = {
  onFilter: (text: string) => void;
  filteredText: string;
};

const FilteringBarView: React.FC<TFilteringBarView> = observer(({ onFilter, filteredText }) => {
  const setOnClick = () => {
    onFilter('');
  };
  return (
    <div>
      <Bar>
        <AiOutlineSearch />
        <Input value={filteredText} placeholder="필터링하기" onChange={(e) => onFilter(e.target.value)} />
        <AiOutlineCloseCircle onClick={setOnClick} className="closeBtn" />
      </Bar>
    </div>
  );
});

const Bar = styled.div`
  width: 23rem;
  height: 4rem;
  border-radius: 2rem;
  ${({ theme }) => theme.CusFlex()};
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.CusColor.white};
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  .closeBtn {
    cursor: pointer;
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
