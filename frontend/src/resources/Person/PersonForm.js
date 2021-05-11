import React from "react";
import {
  SimpleForm,
  TextInput,
  SelectInput,
  Toolbar,
  required,
} from "react-admin";
import { LargeLabel } from "@semapps/archipelago-layout";
import { ReferenceInput } from "@semapps/semantic-data-provider";
import { teachingLevel, structureType } from "../../constants";
import ReferenceQuickCreateInput from "../../pair/ReferenceQuickCreateInput";
import { validatePlaceForm, PlaceFields } from "../Place/PlaceForm";

export const PersonForm = ({ mode, ...rest }) => (
  <SimpleForm
    {...rest}
    redirect="show"
    toolbar={<Toolbar alwaysEnableSaveButton />} // Always enable save as there are problems with ReferenceQuickCreateInput
  >
    <TextInput source="pair:label" validate={required()} fullWidth />
    <ReferenceInput
      reference="Type"
      source="pair:hasType"
      filter={{ a: "pair:AgentType" }}
    >
      <SelectInput optionText="pair:label" />
    </ReferenceInput>
    <SelectInput source="cd:teachingLevel" choices={teachingLevel} />
    {/* <TextInput source="cd:subjects" fullWidth /> */}
    <LargeLabel>Structure</LargeLabel>
    <SelectInput source="cd:structureType" choices={structureType} />
    <TextInput source="cd:structureName" fullWidth />
    <TextInput source="cd:structureLocality" fullWidth />
    <LargeLabel>Pratique</LargeLabel>
    <ReferenceQuickCreateInput
      reference="Place"
      source="pair:hasLocation"
      selectOptionText="pair:label"
      perPage={1000}
      validate={validatePlaceForm}
    >
      <PlaceFields />
    </ReferenceQuickCreateInput>
    <TextInput source="cd:practiceTime" fullWidth />
    <TextInput source="cd:practiceFrequency" fullWidth />
    <TextInput source="cd:practiceSubjects" fullWidth />
    <LargeLabel>Communauté</LargeLabel>
    <TextInput source="cd:skills" fullWidth />
    <TextInput source="pair:webPage" fullWidth />
    <TextInput source="cd:needs" fullWidth />
    <TextInput source="cd:comments" fullWidth />
    <LargeLabel>Contact</LargeLabel>
    {mode === "create" && (
      <TextInput
        source="pair:e-mail"
        helperText="Votre adresse mail n'apparaîtra pas publiquement. On pourra vous écrire via un formulaire de contact."
        fullWidth
      />
    )}
    <TextInput source="pair:aboutPage" fullWidth />
  </SimpleForm>
);

export default PersonForm;
