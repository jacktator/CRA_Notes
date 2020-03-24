import React, {useState} from 'react';
import Page from "../../containers/Page";
import NoteEditor from "../NoteEditor";

const NewNote = () => {

  const [note, setNote] = useState();

  const onChange = editorState => {
    console.log(editorState);
  };

  return (
    <Page>
      <h2>A new journey begins here</h2>
      <NoteEditor onChange={editorState => onChange(editorState)}/>
    </Page>
  )
};

export default NewNote;
