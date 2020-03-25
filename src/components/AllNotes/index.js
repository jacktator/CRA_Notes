import React, {useState} from 'react';
import Page from "../../containers/Page";
import Note from "../Note";
import {List} from "@material-ui/core";
import {dummyUser} from "../../data/user";

const AllNotes = () => {

  const [notes, setNotes] = useState([]);
  // TODO: Pass Search Query into Children
  window.getNotes().then(results => {
    setNotes(results)
  });

  return (
    <Page>
      <List>
        {
          notes.map(note =>
            <Note key={note.date}
                  user={dummyUser}
                  note={note}/>)
        }
      </List>
    </Page>
  );
};

export default AllNotes;
