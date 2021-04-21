import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { PersonInput } from "../../inputs";

export const DocumentForm = props => (
  <SimpleForm {...props}>
    <TextInput source="pair:label" fullWidth />
    <TextInput source="pair:webPage" fullWidth />
    <PersonInput source="pair:offeredBy" />
  </SimpleForm>
);

export default DocumentForm;
