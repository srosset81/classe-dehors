import React from 'react';
import { SimpleForm, TextInput, SelectInput, Link } from 'react-admin';
import { LargeLabel } from "@semapps/archipelago-layout";
import { ReferenceInput } from '@semapps/semantic-data-provider';
import { Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { teachingLevel, structureType } from '../../constants';

export const PersonForm = ({ mode, ...rest }) => (
  <SimpleForm {...rest} redirect="show">
    {mode === 'create' && <Box mb={2} fullWidth><Alert severity="warning" fullWidth>Avant de créer votre profil, nous vous invitons à <Link to="/Place/create">créer le lieu</Link> où vous pratiquez la classe dehors. Vous pourrez ensuite indiquer ce lieu ci-dessous.</Alert></Box>}
    <TextInput source="pair:label" fullWidth />
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
    {mode === 'create' && <TextInput source="pair:e-mail" helperText="Votre adresse mail n'apparaîtra pas publiquement. On pourra vous écrire via un formulaire de contact." fullWidth />}
    <TextInput source="pair:aboutPage" fullWidth />
  </SimpleForm>
);

export default PersonForm;
