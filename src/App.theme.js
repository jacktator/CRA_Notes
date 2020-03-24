import {createGlobalStyle} from 'styled-components';

const sizeBase = 4;

const spaceBase = sizeBase;

const primary = "#e40300";
const black = "#323232";
const border = "#ddd";

export const NotesGlobalStyle = createGlobalStyle`
  html {
    height: 100vh;
  }
  body {
    /* Font */
    color: ${props => props.theme.colors.black};
    height: 100vh;
  }
  #root {
    height: 100vh;
  }
`;

export const notesTheme = () => {
  return {
    colors: {
      primary: primary,
      black: black,
      border: border,
    },

    /**
     * Spacing
     */
    spaceTiny: `${spaceBase / 8}px`,
    spaceExtraSmall: `${spaceBase / 4}px`,
    spaceSmall: `${spaceBase / 2}px`,
    space0: 0,
    space1: `${spaceBase}px`,
    space2: `${spaceBase * 2}px`,
    space3: `${spaceBase * 3}px`,
    space4: `${spaceBase * 4}px`,

    /**
     * Sizes
     */
    sizeTiny: `${sizeBase / 8}px`,
    sizeExtraSmall: `${sizeBase / 4}px`,
    sizeSmall: `${sizeBase / 2}px`,
    size0: 0,
    size1: `${sizeBase}px`,
    size2: `${sizeBase * 2}px`,
    size3: `${sizeBase * 3}px`,
    size4: `${sizeBase * 4}px`,
  }
};
