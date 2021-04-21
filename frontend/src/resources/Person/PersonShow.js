import React from 'react';
import {TextField, SelectField, EmailField, UrlField, TextInput, SimpleForm} from 'react-admin';
import { Hero, Show, MainList, SeparatedListField } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import PersonTitle from './PersonTitle';
import { teachingLevel, structureType } from '../../constants';
import SubList from "../../layout/SubList";

const PersonShow = props => (
  <Show title={<PersonTitle />} {...props}>
    <>
      <Hero image="pair:image">
        <TextField source="pair:label" />
        <ReferenceArrayField reference="Type" source="pair:hasType">
          <SeparatedListField linkType={false}>
            <TextField source="pair:label" />
          </SeparatedListField>
        </ReferenceArrayField>
        <SelectField source="cd:teachingLevel" choices={teachingLevel} />
        <TextField source="cd:subjects" />
        <EmailField source="pair:e-mail" />
        <UrlField source="pair:aboutPage" />
      </Hero>
      <SubList label="Structure">
        <SelectField source="cd:structureType" choices={structureType} />
        <TextField source="cd:structureName" />
        <TextField source="cd:structureLocality" />
      </SubList>
      <SubList label="Pratique">
        <TextField source="cd:practiceTime" fullWidth />
        <TextField source="cd:practiceFrequency" fullWidth />
        <TextField source="cd:practiceSubjects" fullWidth />
      </SubList>
      <SubList label="Communauté">
        <TextField source="cd:skills" fullWidth />
        <UrlField source="pair:webPage" fullWidth />
        <TextField source="cd:needs" fullWidth />
        <TextField source="cd:comments" fullWidth />
      </SubList>
    </>
  </Show>
);

export default PersonShow;
