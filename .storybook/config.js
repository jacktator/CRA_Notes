import {addDecorator, addParameters} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {ThemeProvider} from "styled-components";
import {NotesGlobalStyle, notesTheme} from "../src/App.theme";
import React from "react";

/* Adding Component Info */
addDecorator(withInfo);

addParameters({
  categoryOrder: (a, b) => a < b,
});

/* Adding Qantas Theme */
const ThemeDecorator = storyFn => (
  <ThemeProvider theme={notesTheme}>
    <NotesGlobalStyle/>
    {storyFn()}
  </ThemeProvider>
);
addDecorator(ThemeDecorator);
