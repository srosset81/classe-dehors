import React from 'react';
import { Create } from '@semapps/archipelago-layout';
import DocumentForm from "./DocumentForm";

const DocumentCreate = props => (
  <Create {...props}>
    <DocumentForm />
  </Create>
);

export default DocumentCreate;
