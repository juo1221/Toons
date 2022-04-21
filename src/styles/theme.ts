import { css } from 'styled-components';

const CusFlex = ($justify = 'center', $align = 'center', $direc = 'row') => css`
  display: flex;
  justify-content: ${$justify};
  align-items: ${$align};
  flex-direction: ${$direc};
`;

const hideScroll = () =>
  css`
    overflow: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  `;

const hideText = () => css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CusColor = {
  yellow: '#FEBF0C',
  red: '#FF0000',
  gray: '#888888',
  black: '#000000',
  white: '#FFFFFF',
  main: '#3E3E3D',
  modalBack: 'rgba(114, 114, 114, 0.54)',
  titleBack: 'rgba(114, 114, 114, 0.8)',
};

export const theme = {
  CusColor,
  CusFlex,
  hideScroll,
  hideText,
};
