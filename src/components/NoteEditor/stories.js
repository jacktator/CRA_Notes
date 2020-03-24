import React from "react";
import NoteEditor from './';
import {action} from '@storybook/addon-actions';

const actions = {
  onChange: action('onChange'),
};

export default {
  title: 'NoteEditor',
};

export const Default = () => <NoteEditor {...actions}/>;
