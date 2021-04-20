import React from 'react';
import { SimpleForm, TextInput, SelectInput, SelectArrayInput } from 'react-admin';
import { LargeLabel } from "@semapps/archipelago-layout";
import { ReferenceInput } from '@semapps/semantic-data-provider';

const teachingLevel = [
  { id: 'maternelle', name: 'Maternelle' },
  { id: 'primaire', name: 'Primaire' },
  { id: 'college', name: 'Collège' },
  { id: 'lycee', name: 'Lycée' },
  { id: 'universite', name: 'Université' },
];

const structureType = [
  { id: 'ecole_publique', name: 'Ecole publique' },
  { id: 'ecole_privee', name: 'Ecole privée sous contrat' },
  { id: 'ecole_privee_hc', name: 'Ecole privée hors contrat' },
  { id: 'centre_loisirs', name: 'Centre de loisirs' }
];

export const PersonForm = props => (
  <SimpleForm redirect="show" {...props}>
    <TextInput source="pair:label" fullWidth />
    <ReferenceInput reference="Type" source="pair:hasType" filter={{ a: 'pair:AgentType' }}>
      <SelectInput optionText="pair:label" />
    </ReferenceInput>
    <SelectArrayInput source="cd:teachingLevel" choices={teachingLevel} />
    <TextInput source="cd:subjects" fullWidth />
    <TextInput source="pair:e-mail" fullWidth />
    <TextInput source="pair:aboutPage" fullWidth />
    <LargeLabel>Structure</LargeLabel>
    <SelectArrayInput source="cd:structureType" choices={structureType} />
    <TextInput source="cd:structureName" fullWidth />
    <TextInput source="cd:structureLocality" fullWidth />
    <LargeLabel>Pratique</LargeLabel>
    <TextInput source="cd:practiceTime" fullWidth />
    <TextInput source="cd:practiceFrequency" fullWidth />
    <TextInput source="cd:practiceSubjects" fullWidth />
    <LargeLabel>Communauté</LargeLabel>
    <TextInput source="cd:skills" fullWidth />
    <TextInput source="pair:webPage" fullWidth />
    <TextInput source="cd:needs" fullWidth />
    <TextInput source="cd:comments" fullWidth />
  </SimpleForm>
);

export default PersonForm;
