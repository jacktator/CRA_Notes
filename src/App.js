import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import {NotesGlobalStyle, notesTheme} from "./App.theme"
import {ThemeProvider} from "styled-components";
import Page from "./containers/Page";

const AllNotes = () => (
  <Page title="Current Tasks">
    1
  </Page>
);

const NewNote = () => (
  <Page title="New Note">
    2
  </Page>
);

class App extends Component {

  render = () => this.renderTheme();

  renderTheme = () => (
    <ThemeProvider theme={notesTheme()}>
      <NotesGlobalStyle/>
      {this.renderRoutes()}
    </ThemeProvider>
  );

  renderRoutes = () => (
    <BrowserRouter>
      <Route exact path="/" component={AllNotes}/>
      <Route path="/new" component={NewNote}/>
      <Redirect to="/" />
    </BrowserRouter>
  );
}

export default App;
