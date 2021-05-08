import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import MarkdownInput from 'ra-input-markdown';
import PairLocationInput from "../../pair/PairLocationInput";

export const PlaceForm = ({ mode, ...rest }) => (
  <SimpleForm {...rest} redirect="show">
    <PairLocationInput source="pair:hasPostalAddress" fullWidth />
    <TextInput source="pair:label" fullWidth />
    <MarkdownInput multiline source="pair:description" fullWidth />
  </SimpleForm>
);

export default PlaceForm;
