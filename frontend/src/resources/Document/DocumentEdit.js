import React from 'react';
import { Edit } from '@semapps/archipelago-layout';
import DocumentTitle from './DocumentTitle';
import DocumentForm from "./DocumentForm";

export const DocumentEdit = props => (
  <Edit title={<DocumentTitle />} {...props}>
    <DocumentForm />
  </Edit>
);

export default DocumentEdit;
