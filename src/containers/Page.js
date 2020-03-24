import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {dummyUser as user} from "../data/user";
import NoteAppBar from "../components/AppBar";

const NavBar = () => (
  <div className="navbar">
    <h3>Task Manager</h3>
    <Link to="/">All Notes</Link>
    <Link to="/new">New Note</Link>
  </div>
);

const Page = props => {
  return (
    <div>
      <NoteAppBar user={user}/>
      <NavBar />
      <p className="page-info">
        {props.title}:
      </p>
      <ul className={props.status}>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    </div>
  );
};

Page.propTypes = {

};

export default Page;
