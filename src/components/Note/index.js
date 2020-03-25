import React from 'react';
import PropTypes from 'prop-types';
import {ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Divider} from "@material-ui/core";
import UserType from "../../data/user";

const Note = ({user, note}) => {

  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={note.preview}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                {user.name}
              </Typography>
              {" — " + note.date}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};

Note.propTypes = {
  user: UserType.isRequired,
  note: PropTypes.object.isRequired,
};

export default Note;
