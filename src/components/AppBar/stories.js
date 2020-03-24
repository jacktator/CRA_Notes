import React from "react";
import NoteAppBar from './';
import {dummyUser as user} from "../../data/user";
import {BrowserRouter} from "react-router-dom";

export default {
  title: 'NoteAppBar',
  decorators: [storyFn => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const Default = () => <NoteAppBar user={user}/>;
