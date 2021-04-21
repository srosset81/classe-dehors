import React from 'react';
import { TextField, SelectField, EmailField, UrlField, ShowButton, EditButton, Datagrid } from 'react-admin';
import { Hero, Show, SeparatedListField, MainList } from '@semapps/archipelago-layout';
import { ReferenceField, ReferenceArrayField } from '@semapps/semantic-data-provider';
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
        <ReferenceField reference="Place" source="pair:hasLocation" linkType="show">
          <TextField source="pair:label" />
        </ReferenceField>
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
      <MainList>
        <ReferenceArrayField reference="Document" source="pair:offers">
          <Datagrid rowClick="show">
            <TextField source="pair:label" />
            <TextField source="pair:webPage" />
            <ShowButton />
            <EditButton />
          </Datagrid>
        </ReferenceArrayField>
      </MainList>
    </>
  </Show>
);

export default PersonShow;
