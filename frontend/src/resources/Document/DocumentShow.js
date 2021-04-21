import React from 'react';
import { ShowBase, useShowContext } from 'react-admin';

const RedirectToLink = ({ source }) => {
  const { record } = useShowContext();
  if (record) {
    if( record[source] ) {
      window.location.replace(record[source]);
    } else {
      return "No link defined";
    }
  }
  return null;
};

const DocumentShow = props => (
  <ShowBase {...props}>
    <RedirectToLink source="pair:webPage" />
  </ShowBase>
);

export default DocumentShow;
