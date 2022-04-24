import { useState, useMemo } from 'react';
import fontfaceobserver from 'fontfaceobserver';

export const useFont = (fontName: string) => {
  const [state, setState] = useState(false);
  const isLoded = useMemo<boolean>(() => {
    const font = new fontfaceobserver(fontName);
    font
      .load()
      .then(() => {
        setState(true);
      })
      .catch(() => {
        setState(true);
      });
    return state;
  }, [state]);
  return isLoded;
};
