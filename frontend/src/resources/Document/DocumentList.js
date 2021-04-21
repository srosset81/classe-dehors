import React from 'react';
import { Datagrid, TextField, ShowButton, EditButton } from 'react-admin';
import { List } from '@semapps/archipelago-layout';
import { ReferenceField } from "@semapps/semantic-data-provider";

const DocumentList = props => (
  <List title="Resources" {...props}>
    <Datagrid rowClick="show">
      <TextField source="pair:label" />
      <ReferenceField reference="Person" source="pair:offeredBy" linkType="show">
        <TextField source="pair:label" />
      </ReferenceField>
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);

export default DocumentList;
