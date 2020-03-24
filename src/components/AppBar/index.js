import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import UserType from "../../data/user";
import {useStyles} from "./styles.js";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import {Link} from "react-router-dom";

const NoteAppBar = ({
                      user,
                      onQueryChange,
                    }) => {

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          <Link to="/" className={classes.link}>{user.name}'s Notes</Link>
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={onQueryChange}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <Link to="/new">
          <IconButton aria-label="display add actions" edge="end" color="inherit">
            <AddIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

NoteAppBar.propTypes = {
  user: UserType,
  onQueryChange: PropTypes.func,
};

export default NoteAppBar;
