import { css } from 'styled-components';

const CusFlex = ($justify = 'center', $align = 'center', $direc = 'row') => css`
  display: flex;
  justify-content: ${$justify};
  align-items: ${$align};
  flex-direction: ${$direc};
`;

const CusColor = {
  yellow: '#FEBF0C',
  red: '#FF0000',
  gray: '#888888',
  black: '#000000',
  white: '#FFFFFF',
  main: '#3E3E3D',
  modalBack: 'rgba(114, 114, 114, 0.54)',
};

export const theme = {
  CusFlex,
  CusColor,
};
