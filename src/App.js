import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import {NotesGlobalStyle, notesTheme} from "./App.theme"
import './App.css';
import {ThemeProvider} from "styled-components";
import Page from "./containers/Page";

const AllNotes = () => (
  <Page title="Current Tasks" status="Current"/>
);

const NewNote = () => (
  <Page title="New Note" status="New"/>
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
