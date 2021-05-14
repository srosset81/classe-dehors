import React from "react";
import { SimpleForm, TextInput } from "react-admin";
import MarkdownInput from "../../markdown/MarkdownInput";
import PairLocationInput from "../../pair/PairLocationInput";

export const validatePlaceForm = (values) => {
  const errors = {};
  if (!values["pair:hasPostalAddress"]) {
    errors["pair:hasPostalAddress"] = "required";
  }
  if (!values["pair:label"]) {
    errors["pair:label"] = "required";
  }
  if (!values["pair:description"]) {
    errors["pair:description"] = "required";
  }
  return errors;
};

export const PlaceFields = () => (
  <>
    <p>Merci de remplir tous les champs</p>
    <PairLocationInput
      label="Adresse"
      source="pair:hasPostalAddress"
      fullWidth
    />
    <TextInput label="Nom" source="pair:label" fullWidth />
    <MarkdownInput
      multiline
      label="Description"
      source="pair:description"
      fullWidth
      defaultValue="Ce lieu est spécifique, car ..."
    />
  </>
);

export const PlaceForm = ({ ...rest }) => (
  <SimpleForm {...rest} redirect="show" validate={validatePlaceForm}>
    <PlaceFields />
  </SimpleForm>
);

export default PlaceForm;
