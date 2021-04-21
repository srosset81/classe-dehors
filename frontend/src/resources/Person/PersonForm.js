import React from 'react';
import { SimpleForm, TextInput, SelectInput, ImageInput } from 'react-admin';
import { LargeLabel } from "@semapps/archipelago-layout";
import { ReferenceInput, ImageField } from '@semapps/semantic-data-provider';
import { teachingLevel, structureType } from '../../constants';

export const PersonForm = props => (
  <SimpleForm redirect="show" {...props}>
    <TextInput source="pair:label" fullWidth />
    <ImageInput source="pair:image" accept="image/*">
      <ImageField source="src" />
    </ImageInput>
    <ReferenceInput reference="Type" source="pair:hasType" filter={{ a: 'pair:AgentType' }}>
      <SelectInput optionText="pair:label" />
    </ReferenceInput>
    <SelectInput source="cd:teachingLevel" choices={teachingLevel} />
    <TextInput source="cd:subjects" fullWidth />
    <LargeLabel>Structure</LargeLabel>
    <SelectInput source="cd:structureType" choices={structureType} />
    <TextInput source="cd:structureName" fullWidth />
    <TextInput source="cd:structureLocality" fullWidth />
    <LargeLabel>Pratique</LargeLabel>
    <ReferenceInput reference="Place" source="pair:hasLocation">
      <SelectInput optionText="pair:label" />
    </ReferenceInput>
    <TextInput source="cd:practiceTime" fullWidth />
    <TextInput source="cd:practiceFrequency" fullWidth />
    <TextInput source="cd:practiceSubjects" fullWidth />
    <LargeLabel>Communauté</LargeLabel>
    <TextInput source="cd:skills" fullWidth />
    <TextInput source="pair:webPage" fullWidth />
    <TextInput source="cd:needs" fullWidth />
    <TextInput source="cd:comments" fullWidth />
    <LargeLabel>Contact</LargeLabel>
    <TextInput source="pair:e-mail" helperText="L'adresse apparaîtra sur le site. Vous pouvez fournir une page (ci-dessous) si vous souhaitez être contactés différemment." fullWidth />
    <TextInput source="pair:aboutPage" fullWidth />
  </SimpleForm>
);

export default PersonForm;
