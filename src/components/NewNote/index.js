import React from 'react';
import Page from "../../containers/Page";
import NoteEditor from "../NoteEditor";
import { convertToRaw } from 'draft-js';
import moment from "moment";
import {PREVIEW_LENGTH} from "../../constants/preview";

const NewNote = () => {

  // indexDB keypath is by datestring
  const dateString = moment().format('YYYY-MM-DD-HH:mm');

  // Load existing Note from local indexDB

  let contentState;     // TODO: Implement loading of existing note into the editor
  // const getNoteFromLocalDatabase = () => {
  //   window.getOne(dateString)
  //     .then(retrievedNote => {
  //       contentState = convertFromRaw(retrievedNote);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };
  // getNoteFromLocalDatabase();

  // AutoSave to indexDB
  const saveNoteToLocalDatabase = contentState => {
    // Assuming notes are saved locally by date string
    const preview = contentState.getPlainText().substring(0, PREVIEW_LENGTH);
    const datedState = {
      ...convertToRaw(contentState),
      preview: preview,
      date: dateString
    };
    window.saveRecord(datedState);
  };

  const onChange = editorState => {
    const contentState = editorState.getCurrentContent();
    saveNoteToLocalDatabase(contentState);
  };

  return (
    <Page>
      <h2>A new journey begins here</h2>
      <NoteEditor contentState={contentState} // TODO: Implement loading of existing note into the editor
                  onChange={editorState => onChange(editorState)}/>
    </Page>
  )
};

export default NewNote;
