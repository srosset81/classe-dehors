import React from "react";
import { SimpleForm, TextInput, required } from "react-admin";
import MarkdownInput from "../../markdown/MarkdownInput";

export const OrganizationForm = ({ mode, ...rest }) => (
  <SimpleForm {...rest} redirect="show">
    <TextInput source="pair:label" validate={required()} fullWidth />
    <TextInput source="pair:webPage" fullWidth />
    <MarkdownInput source="pair:description" fullWidth />
  </SimpleForm>
);

export default OrganizationForm;
