import React from 'react';
import { TextField, SelectField, UrlField, FunctionField } from 'react-admin';
import Chip from '@material-ui/core/Chip';
import { Hero, Show, SeparatedListField } from '@semapps/archipelago-layout';
import { ReferenceField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import PersonTitle from './PersonTitle';
import { teachingLevel, structureType } from '../../constants';
import SubList from "../../layout/SubList";
import ContactField from "../../contact/ContactField";

const TeachingLevelField = ({ record }) => {
  // render a list of Chip for teaching levels
  if (!record["cd:teachingLevel"]) {
    return null;
  }
  const array =
    typeof record["cd:teachingLevel"] === "string"
      ? [record["cd:teachingLevel"]]
      : record["cd:teachingLevel"];

  return (
    <>
      {teachingLevel
        .filter(({ id }) => array.includes(id))
        .map(({ id, name }) => (
          <Chip key={id} label={name} variant="outlined" />
        ))}
    </>
  );
};

const PersonShow = (props) => (
  <Show title={<PersonTitle />} {...props}>
    <>
      <Hero>
        <TextField source="pair:label" />
        <ReferenceArrayField reference="Type" source="pair:hasType">
          <SeparatedListField linkType={false}>
            <TextField source="pair:label" />
          </SeparatedListField>
        </ReferenceArrayField>
        <FunctionField
          source="cd:teachingLevel"
          render={(record) => <TeachingLevelField record={record} />}
        />
        <ContactField source="pair:e-mail" />
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
      {/*<MainList>*/}
      {/*  <ReferenceArrayField reference="Document" source="pair:offers">*/}
      {/*    <Datagrid rowClick="show">*/}
      {/*      <TextField source="pair:label" />*/}
      {/*      <TextField source="pair:webPage" />*/}
      {/*      <ShowButton />*/}
      {/*      <EditButton />*/}
      {/*    </Datagrid>*/}
      {/*  </ReferenceArrayField>*/}
      {/*</MainList>*/}
    </>
  </Show>
);

export default PersonShow;
