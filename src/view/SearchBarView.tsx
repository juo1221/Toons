import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { observer } from 'mobx-react-lite';
import { debounce } from 'lodash';
import { TData } from '../api/WebToonData';
import { useEffect } from 'react';

type SearchBarView = {
  onSearch: (text: string) => Promise<string | TData[]>;
  onSetSearchData: (data: TData) => void;
};

const SearchBarView: React.FC<SearchBarView> = observer(({ onSearch, onSetSearchData }) => {
  const [value, setValue] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);
  const [searchList, setSearchList] = useState<string | TData[]>('');
  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  const setOnClick = (info: TData) => {
    onSetSearchData(info);
  };
  const delaySetValue = useCallback(
    debounce((value) => {
      setSearchText(value);
    }, 500),
    [],
  );
  const handleInputChange = (value: string) => {
    delaySetValue(value);
    setValue(value);
  };

  const searchData = debounce(async (text: string) => {
    console.log(text);
    if (!text.trim()) {
      setSearchList('');
    } else {
      setSearchList(await onSearch(text));
    }
  }, 1000);

  useEffect(() => {
    searchData(searchText);
  }, [searchText]);

  const searchListC = () => {
    if (Array.isArray(searchList)) {
      return searchList.map((info: TData) => (
        <SearchList key={info._id} onClick={() => setOnClick(info)}>
          <Title>{info.title}</Title>
          <Author>{info.author}</Author>
          <Service>{info.service}</Service>
        </SearchList>
      ));
    } else {
      return <SearchList>{searchList}</SearchList>;
    }
  };

  return (
    <Bar searchList={!!searchList} isFocused={isFocused}>
      <AiOutlineSearch />
      <Input value={value} placeholder="작가,작품명 검색하기" onChange={(e) => handleInputChange(e.target.value)} onFocus={onFocus} onBlur={onBlur} />
      {searchList ? <ListView isFocused={isFocused}>{searchListC()}</ListView> : null}
    </Bar>
  );
});
type TBar = {
  searchList: boolean;
  isFocused: boolean;
};
type TListView = {
  isFocused: boolean;
};

const Bar = styled.div<TBar>`
  transition: all 0.3s ease-in-out;
  position: relative;
  width: 60rem;
  height: 5rem;
  border-radius: ${({ searchList, isFocused }) => (searchList && isFocused ? '2rem 2rem 0 0' : '2rem 2rem 2rem 2rem')};
  padding: 1.3rem;
  background-color: ${({ theme }) => theme.CusColor.white};
  font-size: 2rem;
  ${({ theme }) => theme.CusFlex('none', 'none')} svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  margin-left: 0.4rem;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.CusColor.gray};
`;
const ListView = styled.ul<TListView>`
  transition: all 0.5s ease-in-out;
  ${({ isFocused }) => {
    if (isFocused) {
      return css`
        transform: translateY(100%);
      `;
    } else {
      return css`
        opacity: 0;
        transform: translateY(-20%);
      `;
    }
  }};
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 30rem;
  z-index: 10;
  padding: 1.3rem;
  overflow: auto;
  border-radius: 0 0 2rem 2rem;
  background-color: ${({ theme }) => theme.CusColor.white};
  ${({ theme }) => theme.hideScroll()};
`;
const SearchList = styled.li`
  text-align: center;
  background-color: ${({ theme }) => theme.CusColor.white};
  padding: 1rem;
  border-top: 1px solid black;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.CusColor.modalBack};
  }
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;
const Title = styled.span`
  border-radius: 10px;
  padding: 1rem;
  max-width: 35rem;
  float: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const Service = styled.span`
  background-color: ${({ theme }) => theme.CusColor.yellow};
  color: ${({ theme }) => theme.CusColor.white};
  max-width: 11rem;
  border-radius: 10px;
  font-size: 1.6rem;
  padding: 1rem;
  margin-right: 1rem;
  float: right;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const Author = styled(Service)`
  background-color: ${({ theme }) => theme.CusColor.gray};
`;
export default SearchBarView;
