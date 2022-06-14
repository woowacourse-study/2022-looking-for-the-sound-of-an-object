import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  COLOR: {
    GREEN_100: '#C6F1BF',
    GREEN_200: '#A3D19C',
    GREY_100: '#F0F0EC',
    GREY_200: '#E1E1DE',
    GREY_300: '#D6D6D6',
    RED: '#DA3D38',
    BLACK: '#000000',
    WHITE: '#FFFFFF',
  },
};

const StyledTheme = ({ children }: React.PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledTheme;
