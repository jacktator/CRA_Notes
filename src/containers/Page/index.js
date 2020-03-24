import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {dummyUser as user} from "../../data/user";
import NoteAppBar from "../../components/AppBar";
import {PageWrapper, ContentWrapper} from "./styles";

const Page = ({children}) => {

  const [query, setQuery] = useState();
  // TODO: Pass Search Query into Children

  return (
    <PageWrapper>
      <NoteAppBar user={user}
                  onQueryChange={
                    e => setQuery(e.target.value ? e.target.value : " ")
                  }/>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </PageWrapper>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
